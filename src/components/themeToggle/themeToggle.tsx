import { RiMoonLine, RiSunLine } from 'react-icons/ri'

import styles from '@/components/themeToggle/themeToggle.module.scss'
import { useTheme } from '@/components/themeToggle/useTheme'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? <RiSunLine size="3.0rem" /> : <RiMoonLine size="3.0rem" />}
    </button>
  )
}
