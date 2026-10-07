import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Expertise />
        <Experience />
        <Programs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
