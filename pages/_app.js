import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router'
import { useState, useEffect } from 'react'
const MyApp = ({ Component, pageProps }) => {
  const [pageLoading, setPageLoading] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', setPageLoading(true))
    Router.events.on('routeChangeComplete', setPageLoading(false))
    Router.events.on('routeChangeError', setPageLoading(false))
  }, [Router])
  return pageLoading ? (
    <div className='Loading'>Loading</div>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
