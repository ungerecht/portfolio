import Image from 'next/image'
import projects from '../projects'
import styles from '../styles/Projects.module.scss'

import { link, github } from '../icons'

const Projects = () => {
  return (
    <div className={styles.projects}>
      {projects.map((project) => {
        return (
          <div key={project.title} className={styles.project}>
            <h4 className={styles.title}>{project.title}</h4>
            <div className={styles.image}>
              <Image
                src={project.imgSrc}
                alt={project.title}
                quality={100}
                layout='fill'
              />
            </div>
            <p className={styles.description}>{project.text}</p>
            <div className={styles.links}>
              <a
                href={project.demo}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                {link}
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                {github}
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
