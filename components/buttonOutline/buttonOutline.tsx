import { Props } from '@/components/buttonOutline/buttonOutline.interface'
import styles from '@/components/buttonOutline/buttonOutline.module.scss'

export const ButtonOutline = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.buttonOutline}>
      {children}
    </button>
  )
}
