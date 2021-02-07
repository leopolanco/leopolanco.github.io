import _JSXStyle from 'styled-jsx/style'
import styles from '../styles/projects.module.scss'
import projectsArray from './components/Projects'

const sizes = `(max-width: 45rem-0.1rem) 680px, 
               (min-width: 45rem) 500px` //desktop size

const projects = () => (
  <>
    <style global jsx>{`
      .header_navlink__1wJsj:nth-of-type(1),
      li:nth-child(1),
      .footer_footerLinks__3_Agy > span:nth-child(1) {
        color: #ff2020;
      }
    `}</style>
    <div className={styles.projectsTitle}>Projects</div>
    <div className={styles.projectsContent}>
      {projectsArray.map((project, index) => {
        let alt = `Project${index + 1}`
        return (
          <div key={`${project.title} ${index}`}>
            <div className={styles.projectCard} id={alt}>
              <div className={styles.projectCardLeft}>
                <div className={styles.projectPicture}>
                  <a
                    target={project.url && '_blank'}
                    rel='noopener'
                    href={project.url ? project.url : null}
                  >
                    <img
                      width='420px'
                      srcSet={project.picture}
                      sizes={sizes}
                      loading='lazy'
                      alt={alt}
                    />
                    <div className={styles.projectTech}>{project.tech}</div>
                  </a>
                  
                </div>
              </div>
              <div className={styles.projectCardRight}>
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={styles.projectDescription}>
                  {project.description}
                </div>
                {project.url && (
                  <a
                    className={styles.projectUrl}
                    target='_blank'
                    rel='noopener'
                    alt={alt}
                    href={project.url}
                  >
                    VISIT
                  </a>
                )}
              </div>
            </div>
            {index + 1 != projectsArray.length && (
              <hr className={styles.projectSeparator} />
            )}
          </div>
        )
      })}
    </div>
  </>
)

export default projects
