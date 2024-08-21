import { Stats } from '@/components/stats/stats'
import styles from '@/components/about/about.module.scss'
import { Reveal } from '@/components/reveal/reveal'
import { SectionHeader } from '@/components/sectionHeader/sectionHeader'

export const About = () => {
  return (
    <section id="a-empresa" className="section-wrapper">
      <SectionHeader title="D2F" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <> 
            <p className={`${styles.aboutText}`}>Desde 2010, a D2F tem se destacado no mercado, oferecendo soluções criativas e inovadoras para cada projeto. Nosso compromisso é transformar clientes em parceiros de sucesso, construindo relações de confiança e entregando resultados que superam expectativas. Com uma equipe altamente capacitada, garantimos a satisfação em cada serviço prestado, seja em projetos web ou mobile.</p>

            <p className={`${styles.aboutText}`}>Nosso foco está em elaborar projetos que combinam criatividade, alta qualidade e inovação. Se você está pensando em expandir seu negócio, estamos aqui para ajudar. Oferecemos soluções rápidas, confiáveis e com uma visão de futuro, sempre atentos às necessidades do cliente.</p>

            <p className={`${styles.aboutText}`}>A missão da D2F é atender e superar as expectativas de nossos clientes e parceiros, fornecendo soluções em plataformas seguras e de qualidade diferenciada. Utilizamos tecnologias modernas para garantir a satisfação em cada projeto, atuando com responsabilidade e gerando valor para todos os envolvidos.</p>

            <p className={`${styles.aboutText}`}>Nossa visão é ser referência em tecnologia e soluções para a internet, reconhecidos pela inovação e qualidade dos serviços que oferecemos. Acreditamos na importância de atingir metas, mantendo sempre o respeito aos clientes, integridade, seriedade e compromisso com a qualidade.</p>

            <p className={`${styles.aboutText}`}>Estamos comprometidos com a superação de resultados, melhoria contínua e inovação, princípios que norteiam todas as nossas ações. Contate-nos hoje mesmo e descubra como podemos contribuir para o crescimento do seu negócio.</p>
            </>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  )
}
