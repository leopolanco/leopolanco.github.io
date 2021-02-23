import Presentation from '../components/Index/Presentation'
import RecentProjects from '../components/Index/RecentProjects'
import Langs from '../components/Index/Langs'
import AboutMe from '../components/Index/AboutMe'
import styles from '../styles/index.module.scss'
/*To do:
- improve the footer
-transition between pages
- fix every spacing issue
-please clean the code before finishing.*/
const Index = () => (
  <>
    <Presentation styles={styles} />;<AboutMe styles={styles} />;
    <Langs styles={styles} />;<RecentProjects styles={styles} />;
  </>
)
export default Index
