import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  SassIcon,
  HTMLIcon,
  CSSIcon
} from '../public/assets/svg/svg'

// fill these manually.
// don't need automation here as the projects will be sporadically added
// best on top, next newest to oldest.
class Project {
  constructor(title, picture, tech, url, description, repo) {
    this.title = title
    this.picture = picture
    this.tech = tech
    this.url = url
    this.description = description
    this.repo = repo
  }
}

const projectsArray = [
  new Project(
    'Proyectos Uptag',
    `/assets/images/Proyup760.webp 1280w, /assets/images/Proyup1280.webp 1920w`,
    <>
        <HTMLIcon />
        <CSSIcon />
        <NodeIcon />
        <MongoIcon />
      </>,
    'https://proyectosuptag.herokuapp.com',
    `Application to store and review final projects, made for the uptag engineering departments`,
    'https://github.com/leopolanco/proyectosuptag'
  ),
  new Project(
    'Real estate landing page',
    `/assets/images/REMock760.webp 1280w, /assets/images/REMock1280.webp 1920w`,
    <>
        <HTMLIcon />
        <CSSIcon />
      </>,
  '',
  `Mockup page for a real estate company, made for general testing purposes`,
  ''
    ),
  new Project(
    'React app test',
    `/assets/images/ClaroApp760.webp 1280w, /assets/images/ClaroApp1280.webp 1920w`,
    <>
        <ReactIcon />
        <SassIcon />
      </>,
  'https://test-claro.vercel.app/',
`Application for searching the nba api. Can show the players in a list, change quantity of results shown and more.`,
'https://github.com/leopolanco/test-claro'
  )
]

export default projectsArray
