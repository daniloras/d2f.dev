import dynamic from 'next/dynamic'

const SideBar = dynamic(() => import('@/components/sidebar/sideBar').then(mod => mod.SideBar))
const NavHeading = dynamic(() => import('@/components/navHeading/navHeading').then(mod => mod.NavHeading))
const Hero = dynamic(() => import('@/components/hero/hero').then(mod => mod.Hero))
const About = dynamic(() => import('@/components/about/about').then(mod => mod.About))
const Projects = dynamic(() => import('@/components/projects/projects').then(mod => mod.Projects))
const Contact = dynamic(() => import('@/components/contact/contact').then(mod => mod.Contact))
const ButtonScrollTop = dynamic(() => import('@/components/buttonScrollTop/buttonScrollTop').then(mod => mod.ButtonScrollTop))

import styles from '@/modules/home/home.module.scss'

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <NavHeading />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <ButtonScrollTop />
          <div
            style={{
              height: '100px',
              background:
                'linear-gradient(180deg, var(--background), var(--background-dark))',
            }}
          >
          </div>
        </main>
      </div>
    </>
  )
}
