import { formSchema } from '@/components/contact/contact.schema'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_URL

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const data = formSchema.parse(req.body)
      const { name, email, phone, message } = data

      await axios.post(webhookUrl, {
        'content': `**Nome:** ${name}\n\n**Telefone:** ${phone} \n\n**Email:** ${email}\n\n**Mensagem**\n\`\`\`${message}\`\`\``,
        'tts': false,
        'components': [],
        'actions': {},
        'username': email
      })
      res.status(200).json({ message: 'Mensagem enviada com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Falha ao enviar uma mensagem' })
    }
  } else {
    res.status(200).json({ message: 'Cannot search router' })
  }
}