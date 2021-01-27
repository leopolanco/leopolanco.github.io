import RecentProjects from './components/Index/RecentProjects'
import Langs from './components/Index/Langs';
import AboutMe from './components/Index/AboutMe'
import Presentation from './components/Index/Presentation'
{/*To do:
- put more content in aboutme and langs comp
- make the icons travel trough the whole page 
- make the recent projects redirect to projects page when clicked*/}


const Index = () => (
    <>
    <Presentation/>
    <AboutMe/>
    <Langs/>
    <RecentProjects/>
    </>
)

export default Index;
