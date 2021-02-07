import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    <div className='contentContainer'>{children}</div>
    <Footer />
  </div>
)

export default Layout
