import { Reveal } from '@/components/reveal/reveal'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { AiOutlineExport } from 'react-icons/ai'

import { Props } from '@/components/projects/components/card/card.interface'
import styles from '@/components/projects/projects.module.scss'

export const Card = (data: Props) => {
  const {
    projectLink,
    description,
    imgSrc,
    title,  
    tech,
  } = data

  const controls = useAnimation()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div 
          className={styles.projectImage}
        >
          <Image
            src={imgSrc}
            quality={60}
            height={320}
            style={{ maxWidth: '100%', height: 'auto' }}
            width={630}
            alt={`An image of the ${title} project.`}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
 
              {
                projectLink  && (
                  <Link href={projectLink} aria-label={title} target="_blank" rel="nofollow">
                    <AiOutlineExport size="2.8rem" />
                  </Link>
                )
              }
            </div>
          </Reveal>
          {tech && (
          <Reveal>
            <div className={styles.projectTech}>{tech.join(' - ')}</div>
          </Reveal>
          )}
          {tech && (
          <Reveal>
            <p className={styles.projectDescription}>
              {description}
            </p>
          </Reveal>
          )}
        </div>
      </motion.div> 
    </>
  )
}
