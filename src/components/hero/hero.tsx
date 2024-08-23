import ReactTypingEffect from 'react-typing-effect'

import { ButtonOutline } from '@/components/buttonOutline/buttonOutline'
import { DotGrid } from '@/components/dotGrid/dotGrid'
import styles from '@/components/hero/hero.module.scss'
import { Reveal } from '@/components/reveal/reveal'

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
          👋, somos a D2F<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            Precisando de um <span><ReactTypingEffect
              text={['Site.', 'Integração API.', 'Aplicativo.', 'Sistemas sob demanda',]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <>
          <p className={styles.aboutCopy}>
            Nosso objetivo é fazer uma jornada e te ajudar a encontrar soluções criativas e inovadoras para o seu negócio. Sempre focamos em qualidade, transparência e comunicação para garantir a sua satisfação. Simples assim, sua visão em realidade juntos!
          </p>
          </>
        </Reveal>
        <Reveal>
          <ButtonOutline
            onClick={() => document.getElementById('contato')?.scrollIntoView()}
            variant='click'
            isLoading={false}
          >
            Bora tomar um café?
          </ButtonOutline>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  )
}
