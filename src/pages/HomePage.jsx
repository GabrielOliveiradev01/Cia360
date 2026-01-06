import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Dejavu from '../components/Dejavu'
import OurWorks from '../components/OurWorks'
import Partners from '../components/Partners'
import Methodology from '../components/Methodology'
import Diferentials from '../components/Diferentials'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Location from '../components/Location'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Stats from '../components/Stats'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    // Se a URL tiver hash #blog, fazer scroll até a seção
    if (location.hash === '#blog') {
      setTimeout(() => {
        const blogSection = document.getElementById('blog')
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Dejavu />
      <OurWorks />
      <Partners />
      <Methodology />
      <Diferentials />
      <Testimonials />
      <Blog />
      <Location />
      <CTA />
      <Footer />
    </div>
  )
}

export default HomePage

