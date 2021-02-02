import React, { useEffect, useState } from 'react'
import axios from 'axios'
import _JSXStyle from 'styled-jsx/style'
import {Loading, DoneIcon} from '../public/assets/svg/svg'
import styles from '../styles/contact.module.scss'

const contact = () => {
const [form, setForm] = useState({});
const [message, setMessage] = useState('')
const [email, setEmail] = useState('')
const [userMessage, setUserMessage] = useState('')

//we a use a loading part
//because we're sending the data through a third party proxy
//and it takes a bit to send it correctly and can fail for connection issues
//this is registered in usermesssage

const [error, setError] = useState('')

useEffect(() => { 
    setForm ({
        message,
        email
    })
} , [message,email])

 const sendFormToGoogleForms = () => {
    const formData = new FormData()

    const GOOGLE_FORM_MESSAGE_ID = 'entry.973126710' //1er name
    const GOOGLE_FORM_EMAIL_ID = 'entry.1358619410' //2do name
    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGeTApRi1L42OiaHWdhYlLR20m5sgCgDRYZpfqGlKyoiOF2g/formResponse'
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

    formData.append(GOOGLE_FORM_MESSAGE_ID, form.message);
    formData.append(GOOGLE_FORM_EMAIL_ID, form.email);
    axios.post(CORS_PROXY+GOOGLE_FORM_ACTION_URL, formData)
    .then(()=>{
        setUserMessage(<DoneIcon/>)
    })
    .catch((e)=>{
        setError('There was an error, please send your message again')
    })
}

const onSubmit = (e) =>{
    e.preventDefault()
    
    //Validating
    if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    .test(email)) {
        return setError('Invalid email')
    } else if (message.length < 1){
        return setError('Invalid message')
    }

    //Clearing fields
    setError('')
    setEmail('')
    setMessage('')
    //Sending
    setUserMessage(<Loading/>) 
    sendFormToGoogleForms()
}

return (
    <>

<h3 className={styles.contactTitle}>Contact </h3>

    <div className={styles.contactForm}>
    <style global jsx>{`
        .header_navlink__1wJsj:nth-of-type(2),
        li:nth-child(2),
        .footer_footerLinks__3_Agy>span:nth-child(2)
         {
            color: #ff2020;
        }
    `}</style>
        <span className={styles.contactFormTitle}>Send a message</span>
        <form onSubmit={onSubmit} method="GET">
            <div className={styles.emailInput}>
        
            <input value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <label className={styles.emailLabel}>Email</label>
            </div>
            <div className={styles.messageInput} >
            
            <textarea value={message} onChange={(e)=> setMessage(e.target.value)} required></textarea>
            <label className={styles.messageLabel}>Message</label>
            </div>
            <div className={styles.contactFormBottom}>
            {error ? <span>{error}</span> : <span>{userMessage}</span>}
            <button className={styles.button} type="submit">Send</button>

            </div>
        </form>
        
    
    
    
    
        </div>
    </>
)}


export default contact;