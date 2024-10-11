import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { Projects } from '@/components/projects/projects'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'
import { ButtonWhatsapp } from '@/components/buttonWhatsapp/buttonWhatsapp'

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
          <div
            style={{
              height: '100px',
              background:
                'linear-gradient(180deg, var(--background), var(--background-dark))',
            }}
          >
          </div>
        </main>
      </div>
    </>
  )
}
