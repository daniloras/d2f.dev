import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import React from 'react'

import { Props } from '@/components/navHeading/components/myLinks/myLinks.interface'

const socialLinks: Props[] = [
  {
    href: 'https://api.whatsapp.com/send/?phone=11911300127&text=Ol%C3%A1+D2F%2C+Gostaria+de+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0',
    icon: <AiOutlineWhatsApp size='2.4rem' />,
    delay: 0.1
  },
  {
    href: 'https://www.instagram.com/d2f.dev',
    icon: <AiOutlineInstagram size='2.4rem' />,
    delay: 0.3
  },
  {
    href: 'https://www.facebook.com/d2f.dev',
    icon: <AiOutlineFacebook size='2.4rem' />,
    delay: 0.2
  },
  {
    href: 'https://linkedin.com/company/d2f-software-house',
    icon: <AiOutlineLinkedin size='2.4rem' />,
    delay: 0.2
  },
]

export default socialLinks
