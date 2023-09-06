const descriptiveText = `I'm a New York-based developer with a degree in Computer Engineering from the UPTAG. 
Throughout my career, I've had the privilege of collaborating with individuals from around the globe to create websites, applications, and software solutions. 
`
const farewell = `I encourage you to explore my portfolio and connect with me. 
Greetings!`

const AboutMe = ({ styles }) => (
  <div className={styles.aboutMe}>
    <div className={styles.aboutMeTitle}>About Me</div>
    <div className={styles.aboutMeText}>
      {descriptiveText} 
      <br /> 
      <br /> 
      {farewell}
    </div>
  </div>
)

export default AboutMe
