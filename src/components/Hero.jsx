import React, { useState, useEffect } from 'react'

const Hero = () => {
  const images = [
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.46 (1).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.46 (2).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.46 (3).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.46 (4).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.46.jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (1).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (2).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (3).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (4).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (5).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (6).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (7).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47 (8).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.47.jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.48 (1).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.48 (2).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.48 (3).jpeg',
    '/Imagenscia/WhatsApp Image 2026-01-06 at 16.13.48.jpeg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Muda a imagem a cada 4 segundos

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`CIA360 Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Logo Centralizada */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src="/slogan.png"
          alt="CIA360 Logo"
          className="w-80 md:w-96 lg:w-[32rem] xl:w-[36rem] h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  )
}

export default Hero

