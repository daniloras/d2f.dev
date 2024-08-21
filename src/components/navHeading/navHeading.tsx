import { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import styles from '@/components/navHeading/navHeading.module.scss'
import { MyLinks } from '@/components/navHeading/components/myLinks/myLinks'
import { menuItems } from '@/components/sidebar/sidebar.data'

export const NavHeading = () => {
  const [openMobile, setOpenMobile] = useState(false)
  const [selected, setSelected] = useState('')
  const toggleref = useRef<HTMLDivElement>(null)

  const handleMobileViewOpen = () => setOpenMobile(true)
  const handleMobileViewClose = () => setOpenMobile(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleref.current && !toggleref.current.contains(event.target as Node)) {
        setOpenMobile(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.mobile}>
        {openMobile ? (
          <AiOutlineClose onClick={handleMobileViewClose} />
        ) : (
          <RiMenuUnfoldLine onClick={handleMobileViewOpen} />
        )}
        <div
          className={
            openMobile
              ? styles.navbarMobileOpenActive
              : styles.navbarMobileOpen
          }
          ref={toggleref}
        >
          <nav>
            {menuItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setSelected(link.href.substring(1))}
                className={selected === link.href.substring(1) ? styles.selected : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
