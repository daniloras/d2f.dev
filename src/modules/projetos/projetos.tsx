import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { Projects } from '@/components/projects/projects'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'
import { ButtonWhatsapp } from '@/components/buttonWhatsapp/buttonWhatsapp'

import { Footer } from '@/components/footer/footer'
import styles from '@/modules/projetos/projetos.module.scss'

export const Projetos = () => {
  return (
    <>
      <div className={styles.projetos}>
        <SideBar />
        <main>
          <NavHeading />
          <Projects />
          <ButtonScrollTop />
          <ButtonWhatsapp />
          <Footer />
        </main>
      </div>
    </>
  )
}
