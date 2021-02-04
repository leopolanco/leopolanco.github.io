import _JSXStyle from 'styled-jsx/style'
import styles from '../styles/projects.module.scss'
//fill these manually.
//don't need automation here as the projects will be sporadically added
//best on top, next newest to oldest.
const project = [
  {
    title: '',
    picture: '',
    tech: '',
    url: '',
    description: ''
  },
  { title: '', picture: '', tech: '', url: '', description: '' },
  { title: '', picture: '', tech: '', url: '', description: '' }
]

//each card will show the tech when hovered
//the tech will be icons in a small bar below the picture
// design will be:
//Picture which will be the same heigh as the card and around 40% of the width
// Title on the side and a small description below the title
//play around with a border
//need interactivity.

const projects = () => (
  <>
    <style global jsx>{`
      .header_navlink__1wJsj:nth-of-type(1),
      li:nth-child(1),
      .footer_footerLinks__3_Agy > span:nth-child(1) {
        color: #ff2020;
      }
    `}</style>
    <div className={styles.projectsTitle}>Projects</div>
    <div className={styles.projectsContent}></div>
  </>
)

export default projects
