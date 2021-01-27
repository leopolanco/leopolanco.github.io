import styles from '../../../styles/index.module.scss'

const sizes = `(max-width: 45rem-0.1rem) 600px, 
               (min-width: 45rem) 500px`//desktop size 


const RecentProjects = () => {

return (
<div className={styles.recentProjects}>
      <div className={styles.recentProjectsTitle}>Recent Projects</div>
        <div className={styles.recentProjectsContent}>
                <div className={styles.recentProject}>
                <img 
                srcSet='/assets/images/BudgetApp1280.webp 1920w,
                        /assets/images/BudgetApp760.webp 1280w'
                sizes={sizes} loading='lazy' alt='First Project'/></div>

                <div className={styles.recentProject}>
                <img 
                srcSet='/assets/images/Proyup1280.webp 1920w,
                        /assets/images/Proyup760.webp 1280w' 
                sizes={sizes} loading='lazy' alt='Second Project'/></div>
                
                <div className={styles.recentProject}>
                <img 
                srcSet='/assets/images/REMock1280.webp 1920w,
                        /assets/images/REMock760.webp 1280w' 
                sizes={sizes} loading='lazy' alt='Third Project'/></div>
        </div>
    </div>
)}
export default RecentProjects