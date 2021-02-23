import {LinkedIn, 
    Mail, 
    GitHub, 
    MainImage
} from '../../public/assets/svg/svg'

const greetings = 'Hello. I am Leo,'; 
const description = 'fullstack developer';
const smallDescription = 'Specialized in creating experiences and quality products with attention to the minimum detail.';    

const Presentation = ({styles}) => (
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

)
export default Presentation;