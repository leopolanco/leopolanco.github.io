import styles from '../styles/404.module.scss'
import Link from 'next/link'
const Custom404 = () => (
    <div className={styles.errorPage}>
        <div>404 - Not found</div>
        <Link href='/'>Go Home</Link>
    </div>
)

export default Custom404