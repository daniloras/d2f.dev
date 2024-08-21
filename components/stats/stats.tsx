import { AiFillCode } from 'react-icons/ai'
import { MdDevicesOther } from 'react-icons/md'

import styles from '@/components/stats/stats.module.scss'
import { Reveal } from '@/components/reveal/reveal'

export const Stats = () => {
  const services: string[] = [
    'Criação de software',
    'Sites e aplicativos',
    'UX Research',
    'Consultoria',
    'Design de interface',
    'Arquitetura de sistemas'
  ]

  const additionalServices: string[] = [
    'Outsourcing de desenvolvedores',
    'Otimização de Legado',
    'Migração de Cloud',
    'Análise de código',
    'Automação de processos',
    'Integração de APIs',
  ]
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Serviços</span>
          </h4>
          <div className={styles.statGrid}> 
            {services.map((service, index) => (
              <span key={index} className="chip">{service}</span>
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
            {additionalServices.map((service, index) => (
              <span key={index} className="chip">{service}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
