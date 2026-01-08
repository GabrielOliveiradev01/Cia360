import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const images = [
    '/Imagenscia/1.jpeg',
    '/Imagenscia/2.jpeg',
    '/Imagenscia/3.jpeg',
    '/Imagenscia/4.jpeg',
    '/Imagenscia/5.jpeg',
    '/Imagenscia/6.jpeg',
    '/Imagenscia/7.jpeg',
    '/Imagenscia/8.jpeg',
    '/Imagenscia/9.jpeg',
    '/Imagenscia/10.jpeg',
    '/Imagenscia/11.jpeg',
    '/Imagenscia/12.jpeg',
    '/Imagenscia/13.jpeg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Limpar qualquer interval anterior
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    
    // Garantir que sempre começa na primeira imagem (índice 0)
    setCurrentIndex(0)
    
    // Iniciar o slideshow
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length
        return nextIndex
      })
    }, 4000) // Muda a imagem a cada 4 segundos

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image}
              alt={`CIA360 Background ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
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

