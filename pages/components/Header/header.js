import Head from 'next/head'
import Link from 'next/link'
import Particles from '../particles'
import styles from '../../../styles/header.module.scss'
import {Hamburger} from '../../../public/assets/svg/svg.js'
import {useState} from 'react'
import {CSSTransition} from 'react-transition-group';


//Todo:
// Optimize the header, make only one list of links.


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [mobileMenuButton, setMobileMenuButton] = useState(<span className={styles.Hamburger}><Hamburger/></span>)
  const mobileMenu = () => (
    setShowMobileMenu(!showMobileMenu)
  )
  return (
    
    <header>
      
      <Head>
        <title>Leo Polanco</title>
        <link rel="icon" href="/assets/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1"></meta>
        <meta name="Description" content="Leo's personal page"></meta>
        <meta name="language" content="en_EN"></meta>
      </Head>

      <Particles/>

      <div className={styles.header}>
        <Link href="/" exact={true} ><span  className={styles.mainLink} onClick={()=>setShowMobileMenu(false)}>Leo <span>Polanco</span></span></Link>
        <div className={styles.showForDesktop}>
          <Link href="/projects" ><span className={styles.navlink}>PROJECTS</span></Link>
          <Link href="/contact"><span className={styles.navlink}> CONTACT </span></Link>
          <Link href="/blog/BlogHome"><span className={styles.navlink}> /BLOG </span></Link>
        </div>




        <div className={styles.showForMobile}>


      <CSSTransition
        classNames={{
          enter:styles.mobileMenuEnter,
          enterActive:styles.mobileMenuEnterActive,
          enterDone:styles.mobileMenuDone,
          exit:styles.mobileMenuLeave,
          exitActive:styles.mobileMenuLeaveActive,
        }}
        in={showMobileMenu}
        timeout={250}
        onEntering={() => setMobileMenuButton(<span className={styles.HamburgerClose}><Hamburger/></span>)}
        onExit={() => setMobileMenuButton(<span className={styles.Hamburger}><Hamburger/></span>)}
        unmountOnExit
        >
    
            <ul className={styles.mobileLinks}>
              <li><Link href="/projects"><span onClick={mobileMenu} className={styles.mobileLink} >PROJECTS</span></Link></li>
              <li><Link href="/contact"><span onClick={mobileMenu} className={styles.mobileLink} >CONTACT</span></Link></li>
              <li><Link href="/blog/BlogHome"><span onClick={mobileMenu} className={styles.mobileLink} >BLOG</span></Link></li>
            </ul>


          


        </CSSTransition>
        <div className={styles.mobileMenuButton} onClick={mobileMenu}>{mobileMenuButton}</div>
        </div>

      </div>
      
    </header>
)}


export default Header;