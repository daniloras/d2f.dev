import { Archivo, JetBrains_Mono } from 'next/font/google'
import { Fragment, useEffect, useRef, useState } from 'react'

import { clips, facts, platforms, rulerMarks } from '@/modules/ganhar/ganhar.data'
import styles from '@/modules/ganhar/ganhar.module.scss'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
})

const pad = (value: number) => String(value).padStart(2, '0')

// Contador REC: tempo desde que a pessoa abriu a página.
const Timecode = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => setSeconds(Math.floor((Date.now() - start) / 1000)), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={styles.tc} aria-hidden="true">
      {pad(Math.floor(seconds / 3600))}:{pad(Math.floor(seconds / 60) % 60)}:{pad(seconds % 60)}
    </span>
  )
}

// Registra este acesso uma vez e mostra o total devolvido pelo servidor.
const VisitCounter = () => {
  const [total, setTotal] = useState<number | null>(null)
  const [failed, setFailed] = useState(false)
  const sent = useRef(false)

  useEffect(() => {
    if (sent.current) return
    sent.current = true

    fetch('/api/ganhar/visitas', { method: 'POST' })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error(`status ${response.status}`))))
      .then((data: { total: number }) => setTotal(data.total))
      .catch(() => setFailed(true))
  }, [])

  if (failed) return null

  return (
    <span className={styles.count} aria-live="polite">
      <span className={styles.countDot} aria-hidden="true" />
      <strong>{total === null ? '…' : total.toLocaleString('pt-BR')}</strong> acessos
    </span>
  )
}

export const Ganhar = () => {
  return (
    <div className={`${styles.page} ${archivo.variable} ${jetbrainsMono.variable}`}>
      <span className={`${styles.vf} ${styles.vfTl}`} aria-hidden="true" />
      <span className={`${styles.vf} ${styles.vfTr}`} aria-hidden="true" />
      <span className={`${styles.vf} ${styles.vfBl}`} aria-hidden="true" />
      <span className={`${styles.vf} ${styles.vfBr}`} aria-hidden="true" />

      <div className={styles.app}>
        <header className={styles.bar}>
          <span className={styles.rec}>
            <span className={styles.dot} aria-hidden="true" />
            REC <Timecode />
          </span>
          <VisitCounter />
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Grave suas tarefas<span className={styles.pd}>.</span>
              <br />
              Receba por hora.
            </h1>
            <p className={styles.lede}>
              Prenda o celular na cabeça e grave em primeira pessoa enquanto cozinha, lava a louça ou cuida do seu pet.
              Os vídeos treinam a IA de empresas de robótica.
            </p>
          </section>

          <div className={styles.signup}>
            <p className={styles.both}>
              <span className={styles.bothMark} aria-hidden="true">+</span>
              Você pode se cadastrar nas duas.<span className={styles.bothExtra}> Uma não impede a outra.</span>
            </p>

            <section className={styles.choices} aria-label="Plataformas para se cadastrar">
              {platforms.map((platform, index) => (
                <Fragment key={platform.name}>
                  {index > 0 && <div className={styles.or} aria-hidden="true">+</div>}
                  <article className={styles.card}>
                    <span className={styles.arm} aria-hidden="true" />
                    <div className={styles.logo}>{platform.logo}</div>
                    <h2 className={styles.name}>{platform.name}</h2>
                    <p className={styles.domain}>{platform.domain}</p>
                    <a className={styles.cta} href={platform.url} target="_blank" rel="noopener noreferrer">
                      <span>
                        Cadastrar<span className={styles.ctaFull}> na {platform.name}</span>
                      </span>
                      <span className={styles.arrow} aria-hidden="true">↗</span>
                    </a>
                  </article>
                </Fragment>
              ))}
            </section>
          </div>

          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  <strong>{fact.value}</strong>
                  <span>{fact.detail}</span>
                </dd>
              </div>
            ))}
          </dl>

          <section className={styles.timeline} aria-label="Exemplo de 1 hora gravada">
            <div className={styles.tlBody}>
              <div className={styles.ruler} aria-hidden="true">
                {rulerMarks.map((mark) => <span key={mark}>{mark}</span>)}
              </div>
              <div className={styles.ticks} aria-hidden="true" />
              <div className={styles.track}>
                {clips.map((clip) => (
                  <span className={styles.clip} style={{ flex: clip.share }} key={clip.label}>{clip.label}</span>
                ))}
              </div>
              <span className={styles.playhead} aria-hidden="true" />
            </div>
            <div className={styles.tlCap}>
              <span>Exemplo de 1 hora gravada</span>
              <strong>≈ R$ 25 a 30</strong>
            </div>
          </section>
        </main>

        <footer className={styles.foot}>
          Página independente, sem vínculo oficial com a Hub ou a Mimix. Os links são de indicação.
          Os valores podem mudar, então confira no site de cada plataforma.
        </footer>
      </div>
    </div>
  )
}
