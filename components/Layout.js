import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    <main id='main-content' className='contentContainer'>{children}</main>
    <Footer />
  </div>
)

export default Layout
