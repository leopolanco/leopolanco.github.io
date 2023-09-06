import styles from '../styles/projects.module.scss';
import projectsArray from '../components/projects';

const sizes = `(max-width: 480px) 480px, 
                600px`; // desktop size

const projects = () => (
  <>
    <div className={styles.projectsTitle}>Projects</div>
    <div className={styles.projectsContent}>
      {projectsArray.map((project, index) => (
        <div key={project.title}>
          <div className={styles.projectCard} id={`Project${index + 1}`}>
            <div className={styles.projectCardLeft}>
              <div className={styles.projectPicture}>
                <a
                  target={project.url && '_blank'}
                  rel="noopener"
                  href={project.url ? project.url : null}
                  aria-label={`${project.title} visit link in image`}>
                  <img
                    width="420px"
                    srcSet={project.picture}
                    sizes={sizes}
                    loading="lazy"
                    alt={`Project${index + 1}`}
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
                <div className={styles.projectLinks}>
                  <a
                    className={styles.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={`Project${index + 1}`}
                    href={project.url}
                    aria-label={`${project.title} visit link`}>
                    VISIT
                  </a>
                </div>
              )}
              {project.repo && (
                <a
                  className={styles.projectRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={`Project${index + 1}`}
                  href={project.repo}
                  aria-label={`${project.repo} visit link`}>
                  REPO
                </a>
              )}
            </div>
          </div>
          {index + 1 !== projectsArray.length && (
            <hr className={styles.projectSeparator} />
          )}
        </div>
      ))}
    </div>
  </>
);

export default projects;
