import Link from 'next/link'
import styles from '../styles/404.module.scss'

const Custom404 = () => (
  <div className={styles.errorPage}>
    <div>Page not found</div>
    <Link href='/'>Go Home</Link>
  </div>
)
export default Custom404