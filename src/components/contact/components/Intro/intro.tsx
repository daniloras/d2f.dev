import Link from 'next/link'
import { RiMailSendFill, RiMapPinFill, RiWhatsappFill } from 'react-icons/ri'

import { contactInfo } from '@/components/contact/contact.data'
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
          <Link href={contactInfo.whatsappUrl} target='_blank'>
            <div className={styles.contactEmail}>
              <RiWhatsappFill size="2.4rem" />
              <span>{contactInfo.phoneFormatted}</span>
            </div>
          </Link>
          <Link href={`mailto:${contactInfo.email}`}>
            <div className={styles.contactEmail}>
              <RiMailSendFill size="2.4rem" />
              <span>{contactInfo.email}</span>
            </div>
          </Link> </div>
      </Reveal>
      <Reveal width="100%">
        <>
          <p className={styles.contactCopy}>
            Caso prefira, podemos agendar uma call ou uma visita em nosso endereço na:</p>

          <p className={styles.contactCopy}>
            <RiMapPinFill size="1.4rem" /> {contactInfo.address}
          </p>
          <p className={styles.contactCopy}>Você também pode utilizar nosso formulário de contato.</p>
        </>
      </Reveal>
    </>
  )
}