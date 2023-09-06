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
    '',
    `Application made to store and review final projects, made for the uptag engineering departments`,
    'https://github.com/leopolanco/proyectosuptag'
  ),
]

export default projectsArray
