import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { About } from '@/components/about/about'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'
import { ButtonWhatsapp } from '@/components/buttonWhatsapp/buttonWhatsapp'

import { Footer } from '@/components/footer/footer'
import styles from '@/modules/empresa/empresa.module.scss'

export const Empresa = () => {
  return (
    <>
      <div className={styles.empresa}>
        <SideBar />
        <main>
          <NavHeading />
          <About />
          <ButtonScrollTop />
          <ButtonWhatsapp />
          <Footer />
        </main>
      </div>
    </>
  )
}
