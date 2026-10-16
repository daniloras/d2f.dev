import type { NextApiRequest, NextApiResponse } from 'next'

import { getVisits, incrementVisits, START_VISITS } from '@/modules/ganhar/visitCounter'

type ResponseData = { total: number } | { message: string }

// GET devolve o total atual. POST registra um acesso e devolve o novo total.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ message: 'Use GET para ler ou POST para registrar um acesso' })
  }

  try {
    const visits = req.method === 'POST' ? await incrementVisits() : await getVisits()
    return res.status(200).json({ total: START_VISITS + visits })
  } catch (error) {
    console.error('[ganhar] falha no contador de acessos:', error)
    return res.status(500).json({ message: 'Não foi possível atualizar o contador de acessos' })
  }
}
