import Head from 'next/head'
import Link from 'next/link'
import Particles from '../particles'
import styles from './header.module.scss'
import {Hamburger, Close} from '../../../public/assets/svg/svg.js'
import {useState} from 'react'
import {CSSTransition} from 'react-transition-group';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [mobileMenuButton, setMobileMenuButton] = useState(<Hamburger/>)
  const mobileMenu = () => (
    setShowMobileMenu(!showMobileMenu)
  )
  return (
    
    <header>
      
      <Head>
        <title>Leo Polanco</title>
        <link rel="icon" href="/assets/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1"></meta>
      </Head>

      <Particles/>

      <div className={styles.header}>
        <Link  href="/" exact={true}><span onClick={()=>setShowMobileMenu(false)} className={styles.mainLink}>Leo <span>Polanco</span></span></Link>
        <div className={styles.showForDesktop}>
          <Link href="/aboutMe" ><span className={styles.navlink}>ABOUT ME</span></Link>
          <Link href="/projects" ><span className={styles.navlink}>PROJECTS</span></Link>
          <Link href="/blog/BlogHome"><span className={styles.navlink}> BLOG </span></Link>
          <Link href="/contact"><span className={styles.navlink}> CONTACT </span></Link>
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
        onEntering={() => setMobileMenuButton(<Close/>)}
        onExit={() => setMobileMenuButton(<Hamburger/>)}
        unmountOnExit
        >
            

            <ul className={styles.mobileLinks}>
            <li><Link href="/aboutMe" ><span onClick={mobileMenu} className={styles.mobileLink}>ABOUT ME</span></Link></li>
            <li><Link href="/projects"><span onClick={mobileMenu} className={styles.mobileLink} >PROJECTS</span></Link></li>
            <li><Link href="/blog/BlogHome"><span onClick={mobileMenu} className={styles.mobileLink} >BLOG</span></Link></li>
            <li><Link href="/contact"><span onClick={mobileMenu} className={styles.mobileLink} >CONTACT</span></Link></li>
            </ul>


          


        </CSSTransition>
        <div className={styles.mobileMenuButton} onClick={mobileMenu}>{mobileMenuButton}</div>
        </div>

      </div>
      
    </header>
)}


export default Header;