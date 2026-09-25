import 'remixicon/fonts/remixicon.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {
  return(
    <div style={{
      backgroundImage: 'linear-gradient(to right, #F1F9FD, white, #F1F9FD)'
    }}>
      <Nav />
      <Home />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  )
}

export default App