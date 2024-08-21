import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from './myLinks.module.scss'
import socialLinks from './myLinks.data'


export const MyLinks = () => {
  return (
    <div className={styles.links}>
      {socialLinks?.map(({ href, icon, delay }, index) => (
        <motion.span
          key={index}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay }}
        >
          <Link href={href} target="_blank" rel="nofollow">
            {icon}
          </Link>
        </motion.span>
      ))}
    </div>
  )
}
