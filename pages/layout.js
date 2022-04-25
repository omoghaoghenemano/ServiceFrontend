import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
