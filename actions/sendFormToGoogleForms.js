import axios from 'axios'

const sendFormToGoogleForms = async form => {
  const formData = new FormData()
  const GOOGLE_FORM_MESSAGE_ID = 'entry.973126710' //1st name
  const GOOGLE_FORM_EMAIL_ID = 'entry.1358619410' //2nd name
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGeTApRi1L42OiaHWdhYlLR20m5sgCgDRYZpfqGlKyoiOF2g/formResponse'
  const CORS_PROXY = 'https://leopersonal-cors.herokuapp.com/'
  formData.append(GOOGLE_FORM_MESSAGE_ID, form.message)
  formData.append(GOOGLE_FORM_EMAIL_ID, form.email)
  return await axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
}

export default sendFormToGoogleForms
