'use-client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

import { contactInfo } from '@/components/contact/contact.data'
import { useTheme } from '@/components/themeToggle/useTheme'

export const ButtonWhatsapp = () => {
  const { theme } = useTheme()

  return (
    <FloatingWhatsApp
        phoneNumber={contactInfo.phoneRaw}
        accountName="D2F Software House"
        avatar="./logo.png"
        statusMessage="Em que posso ajudar?"
        chatMessage="Olá! Tem alguma dúvida?"
        placeholder="Envie suas perguntas aqui!"
        notification
        darkMode={theme === 'dark'}
        notificationSound
        style={{ height: 'auto', width: 'auto'}}
        />
  )
}