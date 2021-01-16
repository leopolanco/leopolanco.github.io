import Header from './Header/header'
import Footer from './Footer/footer'
const Layout = ({children}) => (
    <div className="layout">
        <Header/>
        <div className="content-container">
        {children}
        </div>
        <Footer/>
    </div>
)

export default Layout;