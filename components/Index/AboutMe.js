const descriptiveText = `I am a NY based developer, I have a degree in IT from the UPTAG (Coro, Venezuela). 
I have been working with people all over the world in creating pages, apps and software.
Passionate about programming and fitness, currently looking for a next challenge `
const farewell = `I hope you enjoy my page, Greetings.`

const AboutMe = ({ styles }) => (
  <div className={styles.aboutMe}>
    <div className={styles.aboutMeTitle}>About Me</div>
    <div className={styles.aboutMeText}>
      {descriptiveText} <br /> {farewell}
    </div>
  </div>
)

export default AboutMe
