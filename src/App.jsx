import 'remixicon/fonts/remixicon.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Blog from './components/Blog'

const App = () => {
  return(
    <div style={{
      backgroundImage: 'linear-gradient(to right, #F1F9FD, white, #F1F9FD)'
    }}>
      <Nav />
      <Home />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />

      <FloatingWhatsApp />
    </div>
  )
}

export default App