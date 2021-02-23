import Link from 'next/link'
import styles from '../styles/index.module.scss'
import {LinkedIn, 
  Mail, 
  GitHub, 
  MainImage,
  ReactIcon,
  NodeIcon,
  MongoIcon,
  SassIcon,
  NextIcon,
  GitIcon,
  JSIcon
} from '../public/assets/svg/svg'
import projectsArray from '../components/projects'

/*To do:
- improve the footer
-transition between pages
- fix every spacing issue
-please clean the code before finishing.*/
const sizes = `(max-width: 45rem-0.1rem) 600px, 
               (min-width: 45rem) 500px` //desktop size

const descriptiveText = `I am a Coro based developer, I'm 22 years old and I have a degree in IT from the UPTAG. 
I have been working with people all over the world in creating pages, apps and software.
Passionate about programming and fitness, currently looking for a next challenge `  
const farewell = `I hope you enjoy my page, Greetings.`
const greetings = 'Hello. I am Leo,'; 
const description = 'fullstack developer';
const smallDescription = 'Specialized in creating experiences and quality products with attention to the minimum detail.';    

const Index = () => (
  <>
    <div className={styles.mainDiv}>
      <div className={styles.leftContainer}>
        <div className={styles.greetings}>{greetings}</div>
        <div className={styles.description}><span>a</span> {description}</div>
        <div className={styles.smallDescription}>{smallDescription}</div>
      </div>
      <div >
        <div className={styles.rightContainer}>
          <div className={styles.showForDesktop}><MainImage/></div> {/*This image is called source code, it is a placeholder */}
          <div className={styles.icons}>
            <a target="_blank" rel="noopener"  aria-label="github" alt='github' href='https://github.com/leopolanco'><GitHub/></a>
            <a target="_blank" rel="noopener"  aria-label="linked in" alt='linkedin' href='https://www.linkedin.com/in/leo-polanco-b7ba74144/'><LinkedIn/></a>
            <a target="_blank" rel="noopener"  aria-label="mail icon" alt='mail' href='mailto:leo@leopolanco.com'><Mail/></a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.aboutMe}>
    <div className={styles.aboutMeTitle}>About Me</div>
    <div className={styles.aboutMeText}>{descriptiveText} <br/> {farewell}</div>
  </div>
  <div className={styles.langsTitle}>Working with  </div>
    <div className={styles.langs}>
          <div><NodeIcon/><div>NODEJS</div></div>
          <div><ReactIcon/><div>REACT</div></div>
          <div><MongoIcon/><div>MONGODB</div></div>
          <div><NextIcon/><div>NEXTJS</div></div>
          <div><SassIcon/><div>SASS</div></div>
          <div><GitIcon/><div>GIT</div></div>
          <div><JSIcon/><div>JAVASCRIPT</div></div>
    </div>
    <div className={styles.recentProjects}>
      <div className={styles.recentProjectsTitle}>Recent Projects</div>
      <div className={styles.recentProjectsContent}>
        {projectsArray.slice(0,3).map((project, index) => {
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
  </>
)

export default Index
