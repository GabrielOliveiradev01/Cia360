import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isBlogPage = location.pathname === '/blog' || location.pathname.startsWith('/blog/')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Na página do blog, sempre mostrar fundo
  const shouldShowBackground = isBlogPage || isScrolled

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const handleBlogClick = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    if (location.pathname === '/') {
      // Se estiver na home, fazer scroll até a seção blog
      const blogSection = document.getElementById('blog')
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Se estiver em outra página, navegar para /#blog
      window.location.href = '/#blog'
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (link) => {
    if (link.id === 'blog') {
      handleBlogClick({ preventDefault: () => {} })
      return
    }
    scrollToSection(link.id)
  }

  const navLinks = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Metodologia', id: 'metodologia' },
    { label: 'Obras', id: 'obras' },
    { label: 'Parceiros', id: 'parceiros' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contato', id: 'contato' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={shouldShowBackground ? "/logociaescura.png" : "/logociabranca.png"}
              alt="CIA360"
              className="h-10 md:h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.id === 'blog' ? (
                <button
                  key={link.id}
                  onClick={handleBlogClick}
                  className={`font-medium transition-colors hover:text-[#bed631] ${
                    shouldShowBackground ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors hover:text-[#bed631] ${
                    shouldShowBackground ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2 bg-[#bed631] hover:bg-[#a8c02a] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Diagnóstico
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              shouldShowBackground ? 'text-slate-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                link.id === 'blog' ? (
                  <button
                    key={link.id}
                    onClick={handleBlogClick}
                    className={`text-left font-medium transition-colors hover:text-[#bed631] ${
                      shouldShowBackground ? 'text-slate-700' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`text-left font-medium transition-colors hover:text-[#bed631] ${
                      shouldShowBackground ? 'text-slate-700' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full px-6 py-2 bg-[#bed631] hover:bg-[#a8c02a] text-white font-semibold rounded-lg transition-all duration-300 mt-2"
              >
                Solicitar Diagnóstico
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

