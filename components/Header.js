import Link from 'next/link'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Particles from './Particles'
import styles from '../styles/header.module.scss'
import { Hamburger } from '../public/assets/svg/svg'
import Head from './Head'
// Todo:
// Optimize the header, make only one list of links.

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [mobileMenuButton, setMobileMenuButton] = useState(
    <span className={styles.Hamburger}>
      <Hamburger />
    </span>
  )
  const mobileMenu = () => setShowMobileMenu(!showMobileMenu)
  return (
    <header>
      <Head />
      <Particles />

      <div className={styles.header}>
        <Link href='/' exact>
          <span
            role='link'
            tabIndex={-1}
            className={styles.mainLink}
            onClick={() => setShowMobileMenu(false)}
            onKeyDown={() => setShowMobileMenu(false)}
          >
            Leo <span>Polanco</span>
          </span>
        </Link>
        <a className={styles.skipLink} href='#main-content'>
          Skip to main content
        </a>
        <div className={styles.showForDesktop}>
          <Link href='/projects'>
            <span className={styles.navlink}>PROJECTS</span>
          </Link>
          {/* <Link href='/work'>
            <span className={styles.navlink}>WORK</span>
          </Link> */}
          <Link href='/contact'>
            <span className={styles.navlink}> CONTACT </span>
          </Link>
        </div>

        <div className={styles.showForMobile}>
          <CSSTransition
            classNames={{
              enter: styles.mobileMenuEnter,
              enterActive: styles.mobileMenuEnterActive,
              enterDone: styles.mobileMenuDone,
              exit: styles.mobileMenuLeave,
              exitActive: styles.mobileMenuLeaveActive
            }}
            in={showMobileMenu}
            timeout={250}
            onEntering={() =>
              setMobileMenuButton(
                <span className={styles.HamburgerClose}>
                  <Hamburger />
                </span>
              )
            }
            onExit={() =>
              setMobileMenuButton(
                <span className={styles.Hamburger}>
                  <Hamburger />
                </span>
              )
            }
            unmountOnExit
          >
            <ul className={styles.mobileLinks}>
              <li>
                <Link href='/projects'>
                  <span
                    role='link'
                    tabIndex={-1}
                    onClick={mobileMenu}
                    onKeyDown={mobileMenu}
                    className={styles.mobileLink}
                  >
                    PROJECTS
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link href='/work'>
                  <span
                    role='link'
                    tabIndex={-1}
                    onClick={mobileMenu}
                    onKeyDown={mobileMenu}
                    className={styles.mobileLink}
                  >
                    WORK
                  </span>
                </Link>
              </li> */}
              <li>
                <Link href='/contact'>
                  <span
                    role='link'
                    tabIndex={-1}
                    onClick={mobileMenu}
                    onKeyDown={mobileMenu}
                    className={styles.mobileLink}
                  >
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </CSSTransition>
          <div
            role='link'
            tabIndex={-1}
            onKeyDown={mobileMenu}
            onClick={mobileMenu}
            className={styles.mobileMenuButton}
          >
            {mobileMenuButton}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
