import styles from '../../../styles/index.module.scss'
import {useEffect} from 'react'

const sizes = '450px' //NEED TO MAKE A REACT HOOK TO TAKE VIEWPORT INPUT AND MAKE TWO SIZES FOR PICS
                        //THIS CAN BE ACHIEVED WITH JUST HTML BUT IT DOESN'T SEEM TO BE WORKING FOR ME
                        //MAYBE I'M DOING IT WRONG/
                        //React hook is easier, hope it doesn't shit performance


const RecentProjects = () => {

return (
<div className={styles.recentProjects}>
      <div className={styles.recentProjectsTitle}>Recent Projects</div>
        <div className={styles.recentProjectsContent}>
        <div className={styles.recentProject}>
        <img srcSet='/assets/images/BudgetApp1280.webp 1920w' sizes={sizes} /></div>
        <div className={styles.recentProject}>
        <img srcSet='/assets/images/Proyup1280.webp 1920w' sizes={sizes}/></div>
        <div className={styles.recentProject}>
        <img srcSet='/assets/images/REMock.webp 1920w' sizes={sizes}/></div>
        </div>
    </div>
)}
export default RecentProjects