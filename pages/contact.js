import React, { useState } from 'react'
import _JSXStyle from 'styled-jsx/style'
import {
  Loading,
  Telegram,
  WhatsApp,
  Mail,
  ContactImage,
  DoneIcon
} from '../public/assets/svg/svg'
import styles from '../styles/contact.module.scss'
import sendFormToGoogleForms from '../actions/sendFormToGoogleForms'

const contact = () => {
  const [form, setForm] = useState({
    email: '',
    message: ''
  })
  const [notification, setNotification] = useState('')
  const { email, message } = form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    // Validating
    if (
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      )
    ) {
      return setNotification('Invalid email')
    }  
    if (message.length < 1) {
      return setNotification('Invalid message')
    }
    // cleaning fields
    setForm({
      email: '',
      message: ''
    })
    // sending the message and setting notifications
    setNotification(<Loading />)
    sendFormToGoogleForms(form)
      .then(() => {
        setNotification(<DoneIcon />)
      })
      .catch(() => {
        setNotification('There was an error, please send your message again')
      })
  }
  return (
    <>
      <style global jsx>{`
        .header_navlink__1wJsj:nth-of-type(2),
        li:nth-child(2),
        .footer_footerLinks__3_Agy > span:nth-child(2) {
          color: #ff2020;
        }
      `}</style>
      <h3 className={styles.contactTitle}>Contact </h3>

      <div className={styles.contactContent}>
        <div className={styles.contactForm}>
          <span className={styles.contactFormTitle}>Send a message</span>
          <form onSubmit={onSubmit} method='GET'>
            <div className={styles.emailInput}>
              <input
              id='emailInput'
                value={email}
                name='email'
                onChange={handleChange}
                required
              />
              <label className={styles.emailLabel} htmlFor='emailInput'>Email</label>
            </div>
            <div className={styles.messageInput}>
              <textarea
                id='messageInput' 
                value={message}
                name='message'
                onChange={handleChange}
                required
              />
              <label className={styles.messageLabel} htmlFor='messageInput'>Message</label>
            </div>
            <div className={styles.contactFormBottom}>
              {notification ? <span>{notification}</span> : <span />}
              <button
                className={styles.button}
                type='submit'
                onMouseDown={(e) => e.preventDefault()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className={styles.contactIcons}>
          <ContactImage />
          {/*  Placeholder image */}
          <a
            target='_blank'
            rel='noopener noreferrer'
            alt='mail'
            href='mailto:leo@leopolanco.com'
            aria-label='mail icom'
          >
            <Mail />
            leo@leopolanco.com
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            alt='whatsapp'
            href='https://wa.me/584246519234'
            aria-label='whatsapp icon'
          >
            <WhatsApp /> +584246519234
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            alt='telegram'
            href='https://t.me/Leopn'
            aria-label='telegram icon'
          >
            <Telegram />
            @leopn
          </a>
        </div>
      </div>
    </>
  )
}

export default contact
