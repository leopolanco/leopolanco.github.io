import {
    ReactIcon,
    NodeIcon,
    MongoIcon,
    SassIcon,
    HTMLIcon,
    CSSIcon
  } from '../public/assets/svg/svg'

  //fill these manually.
//don't need automation here as the projects will be sporadically added
//best on top, next newest to oldest.
const projectsArray = [
  {
    title: 'Proyectos Uptag',
    picture: `/assets/images/Proyup1280.webp 1920w,
    /assets/images/Proyup760.webp 1920w`,
    tech: <>
    <HTMLIcon/>
    <CSSIcon/>
    <NodeIcon/>
    <MongoIcon/>
          </>,
    url: 'https://proyectosuptag.herokuapp.com',
    description: `Application to store and review final projects, made for the uptag engineering departments`
  },
  {
    title: 'Real estate landing page',
    picture: `/assets/images/REMock1280.webp 1920w,
    /assets/images/REMock760.webp 1920w`,
    tech: <>
    <HTMLIcon/>
    <CSSIcon/>
    </>,
    url: '',
    description: `Mockup page for a real estate company, made for general testing purposes`
  },
  {
    title: 'React test project',
    picture: `/assets/images/BudgetApp1280.webp 1920w,
    /assets/images/BudgetApp760.webp 1920w`,
    tech: <>
    <ReactIcon/>
    <SassIcon/>
    </>,
    url: 'http://leo-react-project.herokuapp.com/',
    description: `Application for budgeting. Can store, update and delete expenses, this was a course project`
  },
]

export default projectsArray