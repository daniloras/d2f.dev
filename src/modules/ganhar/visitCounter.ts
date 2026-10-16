import { promises as fs } from 'fs'
import path from 'path'

// Valor inicial definido para a página. O total exibido é START_VISITS + acessos reais contados.
export const START_VISITS = 2714

const REDIS_KEY = 'ganhar:visitas'
const LOCAL_FILE = path.join(process.cwd(), '.data', 'ganhar-visitas.json')

type RedisConfig = { url: string, token: string }

// Em produção o contador usa um Redis com API REST (Upstash ou Vercel KV).
// Sem essas variáveis, ele grava num arquivo local em .data/, o que serve para rodar na máquina.
function getRedisConfig(): RedisConfig | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? { url, token } : null
}

async function redisCommand(config: RedisConfig, command: string[]): Promise<unknown> {
  const response = await fetch(config.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  })
  if (!response.ok) {
    throw new Error(`Redis respondeu com status ${response.status}`)
  }
  const data = (await response.json()) as { result?: unknown, error?: string }
  if (data.error) {
    throw new Error(`Redis recusou o comando: ${data.error}`)
  }
  return data.result
}

async function readLocalCount(): Promise<number> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, 'utf8')
    const visits = Number(JSON.parse(raw).visits)
    return Number.isFinite(visits) ? visits : 0
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return 0
    throw error
  }
}

// Fila simples para que dois acessos ao mesmo tempo não sobrescrevam um ao outro no arquivo local.
let localQueue: Promise<unknown> = Promise.resolve()

function incrementLocalCount(): Promise<number> {
  const next = localQueue.then(async () => {
    const visits = (await readLocalCount()) + 1
    const tempFile = `${LOCAL_FILE}.tmp`
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true })
    await fs.writeFile(tempFile, JSON.stringify({ visits }))
    await fs.rename(tempFile, LOCAL_FILE)
    return visits
  })
  localQueue = next.catch(() => undefined)
  return next
}

export async function getVisits(): Promise<number> {
  const redis = getRedisConfig()
  if (redis) {
    return Number(await redisCommand(redis, ['GET', REDIS_KEY])) || 0
  }
  return readLocalCount()
}

export async function incrementVisits(): Promise<number> {
  const redis = getRedisConfig()
  if (redis) {
    return Number(await redisCommand(redis, ['INCR', REDIS_KEY]))
  }
  return incrementLocalCount()
}
