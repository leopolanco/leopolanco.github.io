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
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1"></meta>
      </Head>

      <Particles/>

      <div className={styles.header}>
        <Link  href="/" exact={true}><span onClick={()=>setShowMobileMenu(false)} className={styles.navlink}> Leo</span></Link>
        <div className={styles.showForDesktop}>
          <Link href="/projects" ><span className={styles.navlink}> Projects</span></Link>
          <Link href="/blog/BlogHome"><span className={styles.navlink}> Blog </span></Link>
          <Link href="/contact"><span className={styles.navlink}> Contact </span></Link>
        </div>




        <div className={styles.showForMobile}>
































        
      <CSSTransition
        classNames={{
          enter:styles.mobileMenuEnter,
          enterActive:styles.mobileMenuEnterActive,
          enterDone:styles.mobileMenuAppear,
          exit:styles.mobileMenuLeave,
          exitActive:styles.mobileMenuLeaveActive
        }}
        in={showMobileMenu}
        timeout={350}
        onEntering={() => setMobileMenuButton(<Close/>)}
        onExit={() => setMobileMenuButton(<Hamburger/>)}
        unmountOnExit
        >
            

        
          



            <ul className={styles.mobileLinks}>
            <li><Link href="/projects"><span onClick={mobileMenu} className={styles.mobileLink} >Projects</span></Link></li>
            <li><Link href="/blog/BlogHome"><span onClick={mobileMenu} className={styles.mobileLink} >Blog</span></Link></li>
            <li><Link href="/contact"><span onClick={mobileMenu} className={styles.mobileLink} >Contact</span></Link></li>
            </ul>


          


        </CSSTransition>
        <div className={styles.mobileMenuButton} onClick={mobileMenu}>{mobileMenuButton}</div>
        </div>



























      </div>
      
    </header>
)}


export default Header;