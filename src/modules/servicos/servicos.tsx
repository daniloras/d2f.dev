import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'
import { Footer } from '@/components/footer/footer'
import styles from '@/modules/servicos/servicos.module.scss'
import { Props } from '@/modules/servicos/servicos.interface'
import { Service } from '@/components/service/service'

export const Servicos = (data: Props) => {
  return (
    <>
      <div className={styles.servicos}>
        <SideBar />
        <main>
          <NavHeading />
          <Service {...data} />
          <ButtonScrollTop />
          <Footer />
        </main>
      </div>
    </>
  )
}
