import Link from 'next/link'
import styles from '../styles/404.module.scss'

const Custom404 = () => (
  <div className={styles.errorPage}>
    <div>404 - Not found</div>
    <Link href='/'>Go Home</Link>
  </div>
)
//asdas
export default Custom404