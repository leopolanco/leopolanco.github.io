import Head from 'next/head'
import Link from 'next/link'
//Link es para hacer un redireccionamiento sin hacer refresh (de forma client-routing), navlink para links de header.
const Header = () => (
    <header>
        <Head>
        <title>Leo Polanco</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
        <Link href="/" exact={true}>Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog/BlogHome">Blog</Link>
        <Link href="/contact">Contact</Link>
    </header>
);
export default Header;