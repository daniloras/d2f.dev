import { ButtonScrollTop } from '@/components/buttonScrollTop/buttonScrollTop'
import { SideBar } from '@/components/sidebar/sideBar'
import { NavHeading } from '@/components/navHeading/navHeading'
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
