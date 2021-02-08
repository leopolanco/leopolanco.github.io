import RecentProjects from '../components/Index/RecentProjects'
import Langs from '../components/Index/Langs'
import AboutMe from '../components/Index/AboutMe'
import Presentation from '../components/Index/Presentation'
/*To do:
- put more content in aboutme and langs comp
- improve the footer
-transition between pages
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
