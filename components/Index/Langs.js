import {ReactIcon,
    NodeIcon,
    MongoIcon,
    SassIcon,
    NextIcon,
    GitIcon,
    JSIcon,
    AngularIcon
    } from '../../public/assets/svg/svg'
import styles from '../../styles/index.module.scss'

const Langs = () => (
    <>
    <div className={styles.langsTitle}>Working with  </div>
    <div className={styles.langs}>
          <div><NodeIcon/><div>NODEJS</div></div>
          <div><ReactIcon/><div>REACT</div></div>
          <div><MongoIcon/><div>MONGODB</div></div>
          <div><NextIcon/><div>NEXTJS</div></div>
          <div><SassIcon/><div>SASS</div></div>
          <div><GitIcon/><div>GIT</div></div>
          <div><JSIcon/><div>JAVASCRIPT</div></div>
          <div><AngularIcon/><div>ANGULAR</div></div>
    </div>
    </>
)
export default Langs;