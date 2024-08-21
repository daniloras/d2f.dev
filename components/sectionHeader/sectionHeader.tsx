import { Reveal } from '@/components/reveal/reveal'
import styles from '@/components/sectionHeader/seactionHeader.module.scss'
import { Props } from '@/components/sectionHeader/sectionHeader.interface'

export const SectionHeader = ({ title, dir = 'r' }: Props) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === 'r' ? 'row' : 'row-reverse' }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  )
}
