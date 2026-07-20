import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import WhyChoose from './sections/WhyChoose'
import Process from './sections/Process'
import Technologies from './sections/Technologies'
import Testimonials from './sections/Testimonials'
import Stats from './sections/Stats'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyChoose />
        <Process />
        <Technologies />
        <Testimonials />
        <Stats />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
