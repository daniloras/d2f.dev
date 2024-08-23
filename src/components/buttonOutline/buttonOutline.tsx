import { RiMailSendLine } from 'react-icons/ri'

import { Props } from '@/components/buttonOutline/buttonOutline.interface'
import styles from '@/components/buttonOutline/buttonOutline.module.scss'

export const ButtonOutline = ({ children, isLoading, variant, onClick }: Props) => {
  return (
    <button
      type={variant === 'submit' ? 'submit' : 'button'}
      onClick={variant === 'click' ? onClick : undefined}
      className={styles.buttonOutline}
      disabled={isLoading}
    >
      {isLoading && variant === 'submit' ? (
        <RiMailSendLine className="animate-spin mr-2" />
      ) : (
        children
      )}
    </button>
  )
}
