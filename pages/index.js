import RecentProjects from './components/Index/RecentProjects'
import Langs from './components/Index/Langs';
import AboutMe from './components/Index/AboutMe'
import Presentation from './components/Index/Presentation'
{/*To do, make the icons travel trough the whole page */}
//we're defining these for when we'll have to make a spanish version

const descriptiveText = 'Lorem ipsum dlor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


const Index = () => {
  
  return (
    <>
    <Presentation/>


    <AboutMe/>

      <Langs/>
    
    {/* Fourth section todo: responsive imagens; replace next image library*/}
    <RecentProjects/>

    
    </>
  )
}
export default Index;
