import Head from 'next/head'
import Link from 'next/link'
import Particles from '../particles'
import styles from './header.module.scss'
import {Hamburger} from '../../../public/assets/svg/svg.js'

const Header = () => (
    <header>
      <Head>
        <title>Leo Polanco</title>
        <link rel="icon" href="/assets/images/favicon.png" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1"></meta>
      </Head>

      <Particles/>

      <div className={styles.header}>
        <Link  href="/" exact={true}><span className={styles.navlink}> Leo</span></Link>
        <div className={styles.showForDesktop}>
          <Link href="/projects" ><span className={styles.navlink}> Projects</span></Link>
          <Link href="/blog/BlogHome"><span className={styles.navlink}> Blog </span></Link>
          <Link href="/contact"><span className={styles.navlink}> Contact </span></Link>
        </div>
        <div className={styles.showForMobile}>
        <Hamburger/>
        </div>

      </div>
      
    </header>
);


export default Header;