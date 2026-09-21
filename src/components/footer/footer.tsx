import Link from 'next/link'
import { RiMailSendFill, RiMapPinFill, RiShieldCheckFill, RiWhatsappFill } from 'react-icons/ri'

import { contactInfo } from '@/components/contact/contact.data'
import styles from '@/components/footer/footer.module.scss'
import socialLinks from '@/components/navHeading/components/myLinks/myLinks.data'
import { menuItems } from '@/components/sidebar/sidebar.data'

const safeBrowsingUrl = 'https://transparencyreport.google.com/safe-browsing/search?url=d2f.dev'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Ir para a página inicial" className={styles.brandTitle}>
              D2F<span>.</span>
            </Link>
            <p>
              Software house que vai além da entrega. Desenvolvimento sob demanda, com qualidade, transparência e comunicação.
            </p>
            <Link
              href={safeBrowsingUrl}
              target="_blank"
              rel="nofollow noopener"
              aria-label="Verificar a segurança deste site no Google Safe Browsing"
              className={styles.badge}
            >
              <RiShieldCheckFill size="2.4rem" />
              <span>
                <strong>Site Seguro</strong>
                <small>Google Safe Browsing</small>
              </span>
            </Link>
          </div>

          <nav className={styles.column} aria-label="Navegação do rodapé">
            <h5>
              Navegação<span>.</span>
            </h5>
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.column}>
            <h5>
              Contato<span>.</span>
            </h5>
            <Link href={contactInfo.whatsappUrl} target="_blank" rel="nofollow">
              <RiWhatsappFill size="1.8rem" /> {contactInfo.phoneFormatted}
            </Link>
            <Link href={`mailto:${contactInfo.email}`}>
              <RiMailSendFill size="1.8rem" /> {contactInfo.email}
            </Link>
            <address>
              <RiMapPinFill size="1.8rem" /> {contactInfo.address}
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2021-{year} D2F Software House. Todos os direitos reservados.</span>
          <div className={styles.social}>
            {socialLinks.map(({ href, icon, description }) => (
              <Link key={href} href={href} aria-label={description} target="_blank" rel="nofollow">
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
