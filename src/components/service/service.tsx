import { Stats } from '@/components/stats/stats'
import styles from '@/components/service/service.module.scss'
import { Reveal } from '@/components/reveal/reveal'
import { SectionHeader } from '@/components/sectionHeader/sectionHeader'
import { Props } from '@/modules/servicos/servicos.interface'

export const Service = ({ title, content, icon, slug }: Props) => {

  return (
    <section id={slug} className="section-wrapper">
      
      <SectionHeader title={title} dir="l" />
      <div className={styles.service}>
        <div>
        <>
      {content.map((i, index) => (
        <div key={index} className={styles.iconTextWrapper}>
          <Reveal>
          <p className={styles.serviceText}>
          {index === 0 && <span>{icon}</span>}
          {i}
          </p>
          </Reveal>
        </div>
      ))}
    </>
        </div>
        <Stats />
      </div>
    </section>
  )
}
