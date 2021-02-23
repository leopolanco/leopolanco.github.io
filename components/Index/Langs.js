import {ReactIcon,
    NodeIcon,
    MongoIcon,
    SassIcon,
    NextIcon,
    GitIcon,
    JSIcon
    } from '../../public/assets/svg/svg'

const Langs = ({styles}) => (
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
    </div>
    </>
)
export default Langs;