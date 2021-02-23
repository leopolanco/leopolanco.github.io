import Link from 'next/link'
import styles from '../styles/footer.module.scss'
import { Mail, Phone, Location } from '../public/assets/svg/svg'
const {footer, footerLinks, footerContactInfo} = styles
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
        <a target='_blank' rel='noopener' href='mailto:leo@leopolanco.com'>
          <Mail />
          <span>leo@leopolanco.com</span>
        </a>
        <div>
          <Phone />
          <span>+58 424 651 9234</span>
        </div>
        <div>
          <Location />
          <span>Coro, Venezuela</span>
        </div>
      </div>
    </div>
  )

export default Footer
