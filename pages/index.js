import style from 'styled-jsx/style';
import styles from '../styles/index.module.scss'
import Link from 'next/link'
import {LinkedIn, Mail, GitHub} from '../public/assets/svg/svg'


const Greetings = 'Hello I am Leo' //we're defining these for when we'll have to make a spanish version
const Description = 'A Fullstack developer specialized in creating experiences and quality products'
const smallDescription = 'Based in Venezuela'
const contact = <Link href="/contact"><button className={styles.contactButton}>Get in touch</button></Link>
const Index = () => {
  return (
    <div >
      <div>{Greetings}</div>
      <div>{Description}</div>
      <div>{smallDescription}</div>
      <div>{contact}</div>
      <div><LinkedIn/></div>
      <div><GitHub/></div>
      <div><Mail/></div>


    </div> 
  )
}
export default Index;
