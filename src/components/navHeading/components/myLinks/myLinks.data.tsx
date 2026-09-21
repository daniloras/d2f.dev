import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import React from 'react'

import { contactInfo } from '@/components/contact/contact.data'
import { Props } from '@/components/navHeading/components/myLinks/myLinks.interface'

const socialLinks: Props[] = [
  {
    description: 'Iniciar atendimento pelo nosso Whatsapp',
    href: contactInfo.whatsappUrl,
    icon: <AiOutlineWhatsApp size='3.0rem' />,
    delay: 0.1
  },
  {
    description: 'Conheça nosso Instagram',
    href: 'https://www.instagram.com/d2f.dev',
    icon: <AiOutlineInstagram size='3.0rem' />,
    delay: 0.3
  },
  {
    description: 'Conheça nosso Facebook',
    href: 'https://www.facebook.com/d2f.dev',
    icon: <AiOutlineFacebook size='3.0rem' />,
    delay: 0.2
  },
  {
    description: 'Conheça nossa empresa Linkedin',
    href: 'https://linkedin.com/company/d2f-software-house',
    icon: <AiOutlineLinkedin size='3.0rem' />,
    delay: 0.2
  },
]

export default socialLinks
