import Link from 'next/link'
import projectsArray from '../projects'

const sizes = `(max-width: 480px) 480px, 
                600px` // desktop size

const RecentProjects = ({ styles }) => (
  <div className={styles.recentProjects}>
    <div className={styles.recentProjectsTitle}>Recent Projects</div>
    <div className={styles.recentProjectsContent}>
      {projectsArray.map((project, index) => (
        <div className={styles.recentProject} key={`${project.title}`}>
          <Link href={`/projects/#Project${index + 1}`}>
            <img
              srcSet={project.picture}
              sizes={sizes}
              loading='lazy'
              alt={`Project ${index + 1}`}
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
)
export default RecentProjects
