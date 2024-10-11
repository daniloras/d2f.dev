'use-client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const ButtonWhatsapp = () => {
  return (
    <FloatingWhatsApp
        phoneNumber="11967653062"
        accountName="D2F Software House"
        avatar="./logo.png"
        statusMessage="Em que posso ajudar?"
        chatMessage="Olá! Tem alguma dúvida?"
        placeholder="Envie suas perguntas aqui!"
        notification
        darkMode
        notificationSound />
  )
}