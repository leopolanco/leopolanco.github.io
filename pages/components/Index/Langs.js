import {ReactIcon,
    NodeIcon,
    MongoIcon,
    SassIcon,
    NextIcon,
    GitIcon,
    JSIcon,
    AngularIcon
    } from '../../../public/assets/svg/svg'
import styles from '../../../styles/index.module.scss'

const Langs = () => (
    <>
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
    </>
)
export default Langs;