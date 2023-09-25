import React from 'react'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import About from '../components/About'
import Works from '../components/Works'
import Values from '../components/Values'
import Hiring from '../components/Hiring'
import Contact from '../components/Contact'


const Main = () => {
  return (
    <div>
      {/* The part where we combine all the components separately */}
        <Navbars/>
        <About/>
        <Values/>
        <Works/>
        <Hiring/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main