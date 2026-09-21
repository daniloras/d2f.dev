import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { Contact } from '@/components/contact/contact'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'
import { ButtonWhatsapp } from '@/components/buttonWhatsapp/buttonWhatsapp'

import { Footer } from '@/components/footer/footer'
import styles from '@/modules/contato/contato.module.scss'

export const Contato = () => {
  return (
    <>
      <div className={styles.contato}>
        <SideBar />
        <main>
          <NavHeading />
          {/* <Hero />
          <About />
          <Projects /> */}
          <Contact /> 
          <ButtonScrollTop />
          <ButtonWhatsapp />
          <Footer />
        </main>
      </div>
    </>
  )
}
