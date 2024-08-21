import { Card } from '@/components/projects/components/card/card'
import styles from '@/components/projects/projects.module.scss'
import { SectionHeader } from '@/components/sectionHeader/sectionHeader'
import { projects } from '@/components/projects/projects.data'

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projetos" dir="r" />

      <div className={styles.projects}>
        {projects?.map((project) => {
          return <Card key={project.title} {...project} />
        })}
      </div>
    </section>
  )
}

