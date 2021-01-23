import styles from '../styles/index.module.scss'
import {
  LinkedIn, 
  Mail, 
  GitHub, 
  MainImage,
  ReactIcon,
  NodeIcon,
  MongoIcon,
  SassIcon,
  NextIcon,
  GitIcon,
  JSIcon,
  AngularIcon,
  } from '../public/assets/svg/svg'
import RecentProjects from './components/Index/RecentProjects'
{/*To do, make the icons travel trough the whole page */}
//we're defining these for when we'll have to make a spanish version
const greetings = 'Hello. I am Leo,'; 
const description = 'fullstack developer';
const smallDescription = 'Specialized in creating experiences and quality products with attention to the minimum detail.';
const descriptiveText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


const Index = () => {
  
  return (
    <>
    <div className={styles.mainDiv}>

      {/* First section */}
      <div className={styles.leftContainer}>
        <div className={styles.greetings}>{greetings}</div>
        <div className={styles.description}><span>a</span> {description}</div>
        <div className={styles.smallDescription}>{smallDescription}</div>
      </div>
      <div >
        <div className={styles.rightContainer}>
          <div className={`${styles.mainImage} ${styles.showForDesktop}`}><MainImage/></div> {/*This image is called source code, it is a placeholder */}
          <div className={styles.icons}>
            <a className={styles.githubIcon} target="_blank" rel="noopener" href='https://github.com/leopolanco'><GitHub/></a>
            <a className={styles.linkedInIcon} target="_blank" rel="noopener" href='https://www.linkedin.com/in/leo-polanco-b7ba74144/'><LinkedIn/></a>
            <a className={styles.mailIcon} target="_blank" rel="noopener" href='mailto:leo@leopolanco.com'><Mail/></a>
          </div>
        </div>
      </div>
    </div>


        {/* Second section */}
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeTitle}>About Me</div>
        <div className={styles.aboutMeText}>{descriptiveText}</div>
    </div>


      {/* Third section */}
      <div className={styles.langsTitle}>Working with  </div>
    <div className={styles.langs}>
    
          <div className={styles.langIcon}><NodeIcon/><div>NODEJS</div></div>
          <div className={styles.langIcon}><ReactIcon/><div>REACT</div></div>
          <div className={styles.langIcon}><MongoIcon/><div>MONGODB</div></div>
          <div className={styles.langIcon}><NextIcon/><div>NEXTJS</div></div>
          <div className={styles.langIcon}><SassIcon/><div>SASS</div></div>
          <div className={styles.langIcon}><GitIcon/><div>GIT</div></div>
          <div className={styles.langIcon}><JSIcon/><div>JAVASCRIPT</div></div>
          <div className={styles.langIcon}><AngularIcon/><div>ANGULAR</div></div>
    </div>
    
    {/* Fourth section todo: responsive imagens; replace next image library*/}
    <RecentProjects/>

    
    </>
  )
}
export default Index;
