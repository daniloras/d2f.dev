import Image from 'next/image'

import type { Clip, Fact, Platform } from '@/modules/ganhar/ganhar.interface'

export const platforms: Platform[] = [
  {
    name: 'Hub',
    domain: 'ai.hub.xyz',
    url: 'https://ai.hub.xyz/r/R5FNRC89',
    logo: <Image src="/ganhar/hub-mark.png" alt="" width={112} height={112} />,
  },
  {
    name: 'Mimix',
    domain: 'mimix-ai.xyz',
    url: 'https://mimix-ai.xyz/register?ref=riqueza',
    logo: (
      <svg viewBox="0 0 320 320" aria-hidden="true">
        <g transform="translate(12 12)">
          <path d="M20 22h73l73 82-40 46-74-83v116H20V22Z" fill="#f2f4f8" />
          <path d="M276 22h-73l-73 82 40 46 74-83v116h32V22Z" fill="#3048ff" />
          <path d="M20 274h73l73-82-40-46-74 83V113H20v161Z" fill="#3048ff" />
          <path d="M276 274h-73l-73-82 40-46 74 83V113h32v161Z" fill="#f2f4f8" />
        </g>
      </svg>
    ),
  },
]

export const facts: Fact[] = [
  { label: 'Pagamento', value: 'R$ 25 a 30/hora', detail: 'pagos em dólar' },
  { label: 'Câmera', value: 'Sem mostrar o rosto', detail: 'visão em 1ª pessoa' },
  { label: 'Tarefas', value: 'As do seu dia', detail: 'cozinhar, lavar louça, cuidar do pet' },
]

// Trechos da linha do tempo de exemplo; share é a fatia da hora, em porcentagem.
export const clips: Clip[] = [
  { label: 'Cozinhar', share: 38 },
  { label: 'Lavar louça', share: 27 },
  { label: 'Cuidar do pet', share: 35 },
]

export const rulerMarks = ['00:00', '00:15', '00:30', '00:45', '01:00']
