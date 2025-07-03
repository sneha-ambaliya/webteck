
import './App.css'
import { About } from './Components/About'
import Blog from './Components/Blog'
import Choose from './Components/Choose'
import Faq from './Components/Faq'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'
import Process from './Components/Process'
import Provide from './Components/Provide'
import Review from './Components/Review'
import { Service } from './Components/Service'
import Work from './Components/Work'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <div class="bg-gradient-to-b from-[#BBD4F1]  to-[#E1EAF4] overflow-hidden">
        <Navbar />
        <Hero />
        <Service/>
        <About/>
        <Provide/>
        <Choose/>
        <Work/>
        <Process/>
        <Review/>
        <Faq/>
        <Blog/>
        <Footer/>
      </div>

    </>
  )
}

export default App
