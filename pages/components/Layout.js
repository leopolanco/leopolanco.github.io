import Header from './header'
import Footer from './footer'
const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    <div className='contentContainer'>{children}</div>
    <Footer />
  </div>
)

export default Layout
