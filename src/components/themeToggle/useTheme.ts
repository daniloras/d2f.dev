import { useCallback, useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'theme'
const THEME_EVENT = 'themechange'

const readTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'

export const applyTheme = (theme: Theme) => {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // armazenamento indisponível (modo privado, etc.): o tema vale só para a sessão
  }

  window.dispatchEvent(new Event(THEME_EVENT))
}

const subscribe = (onChange: () => void) => {
  window.addEventListener(THEME_EVENT, onChange)
  return () => window.removeEventListener(THEME_EVENT, onChange)
}

const getServerSnapshot = (): Theme => 'dark'

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot)

  const toggleTheme = useCallback(() => {
    applyTheme(readTheme() === 'dark' ? 'light' : 'dark')
  }, [])

  return { theme, toggleTheme }
}
