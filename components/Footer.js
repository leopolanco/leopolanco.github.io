import Link from 'next/link'
import styles from '../styles/footer.module.scss'
import { Mail, Location } from '../public/assets/svg/svg'

const { footer, footerLinks, footerContactInfo } = styles
const Footer = () => (
  <div className={footer}>
    <div className={footerLinks}>
      <Link href='/projects'>
        <span>PROJECTS</span>
      </Link>
      <Link href='/contact'>
        <span>CONTACT</span>
      </Link>
    </div>
    <div className={footerContactInfo}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:leo@leopolanco.com'
      >
        <Mail />
        <span>leo@leopolanco.com</span>
      </a>
      <div>
        <Location />
        <span>New York City</span>
      </div>
    </div>
  </div>
)

export default Footer
