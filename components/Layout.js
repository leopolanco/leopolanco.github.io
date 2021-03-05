import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <main id='main-content' className='contentContainer'>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
