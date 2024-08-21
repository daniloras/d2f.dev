import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { About } from '@/components/about/about'
import { Contact } from '@/components/contact/contact'
import { Hero } from '@/components/hero/hero'
import { Projects } from '@/components/projects/projects'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'

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
