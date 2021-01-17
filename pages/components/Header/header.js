import Head from 'next/head'
import Link from 'next/link'
import Particles from '../particles'
import styles from './header.module.scss'
import {Hamburger, Close} from '../../../public/assets/svg/svg.js'
import {useState} from 'react'


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
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




































        <div className={styles.mobileMenu}>

          {showMobileMenu ? 
          <div className={styles.mobileMenuButton} onClick={mobileMenu}><Close/></div> :
          <div className={styles.mobileMenuButton} onClick={mobileMenu}><Hamburger/>
          
          
          
          
          
          </div> 
          }

          <div className={styles.mobileLinks}>
          <div className={showMobileMenu ? undefined : styles.shouldHide}>
            <Link href="/projects"><span onClick={mobileMenu} className={styles.mobileLink} >Projects</span></Link>
            <Link href="/blog/BlogHome"><span onClick={mobileMenu} className={styles.mobileLink} >Blog</span></Link>
            <Link href="/contact"><span onClick={mobileMenu} className={styles.mobileLink} >Contact</span></Link>
            </div>
          
            </div>
        </div>
        </div>



























      </div>
      
    </header>
)}


export default Header;