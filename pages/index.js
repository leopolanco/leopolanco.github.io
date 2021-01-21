import styles from '../styles/index.module.scss'
import {LinkedIn, Mail, GitHub, MainImage} from '../public/assets/svg/svg'


const greetings = 'Hello, I am Leo,' //we're defining these for when we'll have to make a spanish version
const description = 'a fullstack developer'
const smallDescription = 'Specialized in creating experiences and quality products with attention to the minimum detail.'
const Index = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftContainer}>
        <div className={styles.greetings}>{greetings}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.smallDescription}>{smallDescription}</div>
      </div>
      <div className={`${styles.rightContainer} ${styles.showForDesktop}`}> {/*Please fix the double classname*/}
         <div className={styles.mainImage}><MainImage/></div> {/*This image is called source code, it is a placeholder */}
      <div className={styles.icons}>
        <a className={styles.githubIcon} target="_blank" rel="noopener" href='https://github.com/leopolanco'><GitHub/></a>
        <a className={styles.linkedInIcon} target="_blank" rel="noopener" href='https://www.linkedin.com/in/leo-polanco-b7ba74144/'><LinkedIn/></a>
        <a className={styles.mailIcon} target="_blank" rel="noopener" href='mailto:leo@leopolanco.com'><Mail/></a>
      </div>
      </div> 
    </div> 
  )
}
export default Index;
