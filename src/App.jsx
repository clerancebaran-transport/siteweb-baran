import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Stats from './components/Stats'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Stats />
      <Founder />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
