import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/components/sidebar/sidebar.module.scss'
import { menuItems } from '@/components/sidebar/sidebar.data'

export const SideBar = () => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper')

    const options = {
      threshold: 0.3,
    }

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    sections.forEach((section) => observer.observe(section))
  }, [])

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <Link href="/" aria-label="Ir para a página inicial" className={styles.logoLink}>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="D2F Software House"
          className={styles.logo}
        />
      </Link>
      {menuItems.map((item, index) => (
        <motion.a
          key={item.label}
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          href={item.href}
          onClick={() => setSelected(item.href.substring(1))}
          className={selected === item.href.substring(1) ? styles.selected : ''}
        >
          {item.label}
        </motion.a>
      ))}
    </motion.nav>
  )
}
