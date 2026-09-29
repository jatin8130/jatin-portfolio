import 'remixicon/fonts/remixicon.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Blog from './components/Blog'

const App = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(
            circle at 15% 15%,
            rgba(255, 1, 79, 0.10),
            transparent 28%
          ),
          radial-gradient(
            circle at 85% 75%,
            rgba(255, 1, 79, 0.07),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #08090B 0%,
            #121417 45%,
            #0B0C0F 70%,
            #151116 100%
          )
        `,
      }}
    >
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