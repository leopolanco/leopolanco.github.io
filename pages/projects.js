import _JSXStyle from 'styled-jsx/style'
import styles from '../styles/projects.module.scss'
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  SassIcon,
  HTMLIcon,
  CSSIcon
} from '../public/assets/svg/svg'
//fill these manually.
//don't need automation here as the projects will be sporadically added
//best on top, next newest to oldest.
const projectsArray = [
  {
    title: 'Proyectos Uptag',
    picture: `/assets/images/Proyup1280.webp 1920w,
    /assets/images/Proyup760.webp 1920w`,
    tech: <>
    <HTMLIcon/>
    <CSSIcon/>
    <NodeIcon/>
    <MongoIcon/>
          </>,
    url: 'https://proyectosuptag.herokuapp.com',
    description: `Application to store and review final projects, made for the uptag engineering departments`
  },
  {
    title: 'Real estate landing page',
    picture: `/assets/images/REMock1280.webp 1920w,
    /assets/images/REMock760.webp 1920w`,
    tech: <>
    <HTMLIcon/>
    <CSSIcon/>
    </>,
    url: '',
    description: `Mockup page for a real estate company, tested general design practices`
  },
  {
    title: 'React test project',
    picture: `/assets/images/BudgetApp1280.webp 1920w,
    /assets/images/BudgetApp760.webp 1920w`,
    tech: <>
    <ReactIcon/>
    <SassIcon/>
    </>,
    url: 'http://leo-react-project.herokuapp.com/',
    description: `Application for budgeting. Can store, update and delete expenses, this was a course project`
  },
]


//play around with a border
//need interactivity.
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
      {projectsArray.map((project,index) => {
      let alt=`Project ${index+1}`;
      return  (
        <div key={`${project.title} ${index}`}>
      <div className={styles.projectCard}>
        <div className={styles.projectCardLeft}>
          <div className={styles.projectPicture}>
          <img
          width='420px'

            srcSet={project.picture}
            sizes={sizes}
            loading='lazy'
            alt={alt}
          />
        <div className={styles.projectTech}>{project.tech}</div>
          </div>
          
        </div>


        <div className={styles.projectCardRight}>
          <div className={styles.projectTitle}>{project.title}</div>
          <div className={styles.projectDescription}>{project.description}</div>
          {project.url && <a className={styles.projectUrl} target="_blank" rel="noopener" alt={alt} href={project.url}>VISIT</a> }
        </div>
        
        
      </div>
      {index+1!=projectsArray.length && <hr className={styles.projectSeparator}/>}
      
      </div>
      )})}
    </div>
  </>
)

export default projects
