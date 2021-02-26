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
    picture: `/assets/images/Proyup760.webp 1280w,
    /assets/images/Proyup1280.webp 1920w`,
    tech: <>
    <HTMLIcon/>
    <CSSIcon/>
    <NodeIcon/>
    <MongoIcon/>
          </>,
    url: 'https://proyectosuptag.herokuapp.com',
    description: `Application to store and review final projects, made for the uptag engineering departments`,
    repo: 'https://github.com/leopolanco/proyectosuptag'
  },
  {
    title: 'Real estate landing page',
    picture: `/assets/images/REMock760.webp 1280w,
    /assets/images/REMock1280.webp 1920w`,
    tech: <>
    <HTMLIcon/>
    <CSSIcon/>
    </>,
    url: '',
    description: `Mockup page for a real estate company, made for general testing purposes`,
    repo:''
  },
  {
    title: 'React app test',
    picture: `/assets/images/ClaroApp760.webp 1280w,
    /assets/images/ClaroApp1280.webp 1920w`,
    tech: <>
    <ReactIcon/>
    <SassIcon/>
    </>,
    url: 'https://test-claro.vercel.app/',
    description: `Application for searching the nba api. Can show the players in a list, change quantity of results shown and more`,
    repo: 'https://github.com/leopolanco/test-claro'
  },
]

export default projectsArray