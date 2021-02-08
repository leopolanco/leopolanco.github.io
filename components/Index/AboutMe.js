import styles from '../../styles/index.module.scss'
const descriptiveText = `I am a Coro based developer, with 22 years old and a degree in IT from the UPTAG. 
I have been working with people all over the world in creating pages, apps and software.
Passionate about programming and fitness, currently looking for a next challenge `  
const farewell = `I hope you enjoy my page, Greetings.`

const AboutMe = () => (
  <div className={styles.aboutMe}>
    <div className={styles.aboutMeTitle}>About Me</div>
    <div className={styles.aboutMeText}>{descriptiveText} <br/> {farewell}</div>
  </div>
)
export default AboutMe
