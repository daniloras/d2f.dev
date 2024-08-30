import Link from 'next/link'
import { RiMailSendFill, RiMapPinFill, RiWhatsappFill } from 'react-icons/ri'

import { Reveal } from '@/components/reveal/reveal'
import styles from '@/components/contact/contact.module.scss'

export const Intro = () => {
  return (
    <>
      <Reveal width="100%">
        <h4 className={styles.contactTitle}>
          Contato<span>.</span>
        </h4>
      </Reveal>
      <Reveal width="100%">
        <p className={styles.contactCopy}>
          Estamos a um clique de transformar suas ideias em realidade. Entre em contato e vamos inovar juntos, criando soluções tecnológicas sob medida para o sucesso do seu negócio.
        </p>
      </Reveal>
      <Reveal width="100%">
        <div className={styles.callAction}>
          <Link href="https://api.whatsapp.com/send/?phone=11967653062&text=Ol%C3%A1+D2F%2C+Gostaria+de+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" target='_blank'>
            <div className={styles.contactEmail}>
              <RiWhatsappFill size="2.4rem" />
              <span>(11) 9-6765-3062</span>
            </div>
          </Link>
          <Link href="mailto:contato@d2f.dev">
            <div className={styles.contactEmail}>
              <RiMailSendFill size="2.4rem" />
              <span>contato@d2f.dev</span>
            </div>
          </Link> </div>
      </Reveal>
      <Reveal width="100%">
        <>
          <p className={styles.contactCopy}>
            Caso prefira, podemos agendar uma call ou uma visita em nosso endereço na:</p>

          <p className={styles.contactCopy}>
            <RiMapPinFill size="1.4rem" /> Av. Paulista, 1636 - sala 1504, Cerqueira César - São Paulo - SP, 01310-200.
          </p>
          <p className={styles.contactCopy}>Você também pode utilizar nosso formulário de contato.</p>
        </>
      </Reveal>
    </>
  )
}