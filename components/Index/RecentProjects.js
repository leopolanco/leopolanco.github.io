import Link from 'next/link'
import styles from '../../styles/index.module.scss'
import projectsArray from '../projects'

const sizes = `(max-width: 45rem-0.1rem) 600px, 
               (min-width: 45rem) 540px` //desktop size

const RecentProjects = () => {
  return (
    <div className={styles.recentProjects}>
      <div className={styles.recentProjectsTitle}>Recent Projects</div>
      <div className={styles.recentProjectsContent}>
        {projectsArray.map((project, index) => {
          let alt = `Project ${index + 1}`
          return (
            <div className={styles.recentProject} key={`${project.title} ${index}`}>
              <Link href={`/projects/#Project${index + 1}`}>
                <img
                width='auto'
                height='auto'
                  srcSet={project.picture}
                  sizes={sizes}
                  loading='lazy'
                  alt={alt}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default RecentProjects
