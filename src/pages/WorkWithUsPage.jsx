import React, { useState, useEffect } from 'react'
import { Heart, MapPin, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WorkWithUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null
  })

  const [currentIndex, setCurrentIndex] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData)
    alert('Obrigado! Seu currículo foi enviado com sucesso.')
    setFormData({ name: '', email: '', phone: '', message: '', cv: null })
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const jobs = [
    {
      id: 1,
      location: 'SP',
      title: 'Assistente de Atendimento Offline',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Se identifica com atendimento offline? Estamos te esperando!',
      fullDescription: 'Qual será sua função aqui na CIA: Atuar com atendimento, elaboração e acompanhamento de briefing, entre cliente...'
    },
    {
      id: 2,
      location: 'SP',
      title: 'Estágio Atendimento Digital',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Se identifica com atendimento digital? Estamos te esperando!',
      fullDescription: 'Qual sera sua função aqui na CIA: Atuar com atendimento, elaboração e acompanhamento de briefing, entre cliente...'
    },
    {
      id: 3,
      location: 'SP',
      title: 'Desenvolvedor(a) Front-end Web – PJ',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Tem experiência com desenvolvimento? Estamos te esperando!',
      fullDescription: 'O(a) programador(a) será responsável por: - Criar websites, landing pages, hotsites, blogs ou...'
    },
    {
      id: 4,
      location: 'SP',
      title: 'Web Designer – PJ',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Tem experiência com design digital? Estamos te esperando!',
      fullDescription: 'Qual sera sua função aqui na CIA: Será desenvolver apresentações, identidade visual, criar layouts para...'
    },
    {
      id: 5,
      location: 'SP',
      title: 'Analista de Mídia Performance – PJ',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Tem experiência com mídia e performance? Estamos te esperando!',
      fullDescription: 'Atividades: - Planejamento, acompanhamento e otimização de campanhas online; - Gerenciamento das campanhas com...'
    },
    {
      id: 6,
      location: 'SP',
      title: 'Social Media',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Estamos buscando um(a) Social Media para somar no nosso time e crescer com a gente. Então, vamos conversar?',
      fullDescription: 'Principais responsabilidades e atribuições: - Gerenciar as redes...'
    },
    {
      id: 7,
      location: 'SP',
      title: 'Diretor de Arte',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Estamos buscando um(a) Diretor(a) de Arte para somar no nosso time e crescer com a gente. Então, vamos conversar?',
      fullDescription: 'Principais responsabilidades e atribuições: - Criação de...'
    },
    {
      id: 8,
      location: 'SP',
      title: 'Atendimento Digital',
      description: 'Está querendo trabalhar num lugar bacana, com clientes legais e horários flexíveis? Tem experiência com atendimento digital e mercado imobiliário? Estamos te esperando!',
      fullDescription: 'Qual sera sua função aqui na CIA: Atuar com atendimento, elaboração e acompanhamento de...'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section com Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
          {/* Overlay escuro para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-3 drop-shadow-2xl">
            Trabalhe <span className="text-red-500 flex items-center gap-2">
              Conosco <Heart className="w-10 h-10 fill-red-500" />
            </span>
          </h1>
        </div>
      </section>

      {/* Nossos Empreiteiros Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-6">
              NOSSOS <span className="text-[#bed631]">EMPREITEIROS</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#444649] mb-4">
                MÃO DE OBRA QUALIFICADA
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Uma equipe multidisciplinar, formada por experientes profissionais com muita garra talento para construir sucessos consolidados, tijolo por tijolo.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-semibold text-[#444649]">
              O METRO QUADRADO MAIS BEM FREQUENTADO POR EMPREENDEDORES
            </p>
          </div>
        </div>
      </section>

      {/* Vagas Abertas Section */}
      <section className="py-16 bg-[#f1f1f1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-12 text-center">
            VAGAS <span className="text-[#bed631]">ABERTAS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#bed631] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[#bed631] font-bold text-lg">#{job.location}</span>
                  <h3 className="text-xl font-bold text-[#444649] flex-1">
                    {job.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <button className="text-[#bed631] font-semibold hover:text-[#a8c02a] transition-colors">
                  ler mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
              NÃO ENCONTROU A VAGA CERTA PARA VOCÊ?
            </h2>
            <p className="text-xl text-slate-600">
              DEIXE SEU CV CONOSCO:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#f1f1f1] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#444649] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#bed631] focus:ring-2 focus:ring-[#bed631]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#444649] mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#bed631] focus:ring-2 focus:ring-[#bed631]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-[#444649] mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#bed631] focus:ring-2 focus:ring-[#bed631]/20 outline-none transition-all"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-[#444649] mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#bed631] focus:ring-2 focus:ring-[#bed631]/20 outline-none transition-all resize-none"
                placeholder="Conte-nos um pouco sobre você e suas experiências..."
              />
            </div>

            <div className="mb-8">
              <label htmlFor="cv" className="block text-sm font-semibold text-[#444649] mb-2">
                Enviar Currículo (PDF) *
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#bed631] focus:ring-2 focus:ring-[#bed631]/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#bed631] file:text-white hover:file:bg-[#a8c02a] cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-[#bed631] hover:bg-[#a8c02a] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <Send className="w-5 h-5" />
              Enviar Currículo
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WorkWithUsPage

