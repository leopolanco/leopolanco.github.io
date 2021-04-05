import styles from '../styles/footer.module.scss'
import { Mail, Location } from '../public/assets/svg/svg'

const { footer, footerContactInfo } = styles
const Footer = () => (
  <div className={footer}>
    <div className={footerContactInfo}>
      <a target='_blank' rel='noopener noreferrer' href='mailto:leo@leopolanco.com'>
        <Mail />
        <span>leo@leopolanco.com</span>
      </a>
      <div>
        <Location />
        <span>Coro, Venezuela</span>
      </div>
    </div>
  </div>
)

export default Footer
