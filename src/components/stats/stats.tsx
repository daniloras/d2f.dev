import { AiFillCode } from 'react-icons/ai'
import { MdDevicesOther } from 'react-icons/md'
import Link from 'next/link'

import styles from '@/components/stats/stats.module.scss'
import { Reveal } from '@/components/reveal/reveal'
import { servicesData } from '@/modules/servicos/servicos.data'
import { useRouter } from 'next/router'

export const Stats = () => {
  const router = useRouter()
  const slugPage = router.query.slug
  
  const services =  servicesData.filter((i) => i.type === 'PRIMARY')

  const additionalServices =  servicesData.filter((i) => i.type === 'SECONDARY')
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Serviços</span>
          </h4>
          <div className={styles.statGrid}> 
            {services?.map(({slug, title}, index) => (
              <Link href={`/servicos/${slug}`} key={index}>
                <span key={index} className={`chip ${slug === slugPage && 'chip-active'}`}>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdDevicesOther size="2.4rem" color="var(--brand)" />
            <span>Outros serviços</span>
          </h4>
          <div className={styles.statGrid}>
            {additionalServices?.map(({slug, title}, index) => (
              <Link href={`/servicos/${slug}`} key={index}>
                <span key={index} className={`chip ${slug === slugPage && 'chip-active'}`}>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
