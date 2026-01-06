import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/imagemobrigado.jpeg"
          alt="CIA360 Background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Hero

