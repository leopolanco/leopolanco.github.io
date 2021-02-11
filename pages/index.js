import RecentProjects from '../components/Index/RecentProjects'
import Langs from '../components/Index/Langs'
import AboutMe from '../components/Index/AboutMe'
import Presentation from '../components/Index/Presentation'
/*To do:
- improve the footer
-transition between pages
- fix every spacing issue
-please clean the code before finishing.*/

const Index = () => (
  <>
    <Presentation />
    <AboutMe />
    <Langs />
    <RecentProjects />
  </>
)

export default Index
