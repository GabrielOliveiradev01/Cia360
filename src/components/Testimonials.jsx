import React from 'react'
import { Quote } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const testimonials = [
    {
      quote: "Trabalhar com a CIA é um privilégio. O que mais me encanta é que eles conseguem colocar em cada detalhe essa paixão pelo trabalho que fazem.",
      author: "Raquel Pagano",
      company: "Pagano"
    },
    {
      quote: "A CIA é uma das mais tradicionais e experientes agências focadas no mercado imobiliário que eu conheço! Sua equipe é extremamente atenciosa, rápida e profissional.",
      author: "Guilherme Rossi",
      company: "GR Properties"
    },
    {
      quote: "Nesses quase 20 anos de parceria com a CIA, são diversas as características que a destacam nesse mercado. Entre elas, sua capacidade de atender com excelência diversos tipos de produtos espalhados por diversas regiões.",
      author: "Odilon Bado Castriota",
      company: "Grupo ZS Urbanismo"
    },
    {
      quote: "Tenho o prazer de ter a CIA como um parceiro estratégico da Vinx, desde da concepção de nossos produtos a estratégia de vendas. Uma empresa focada no mercado imobiliário, que transborda inovação, criatividade e ousadia.",
      author: "Guilherme Yogolare",
      company: "Vinx Construtora"
    },
    {
      quote: "Moderna, ágil, dinâmica e comprometida com os objetivos do cliente. Assim tem que ser uma agência voltada para o mercado imobiliário, e assim, definitivamente, é a CIA.",
      author: "Mauro Teixeira Pinto",
      company: "TPA Empreendimentos"
    },
    {
      quote: "Nós já havíamos trabalhado com algumas agências de publicidade, porém quando conhecemos a CIA, e o Ivan, vimos o comprometimento dele com o produto. Hoje posso afirmar que se não tivéssemos essa parceria com a CIA não teríamos alcançado tudo que conseguimos até hoje.",
      author: "Junior",
      company: "Zatz Empreendimentos"
    },
  ]

  return (
    <section ref={ref} className={`py-24 bg-[#f1f1f1] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Vox Populi, <span className="text-[#bed631]">Vox Dei</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cada cliente bem atendido, que acredita em nossa filosofia de trabalho, acaba se tornando um amigo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#bed631] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-[#bed631] mb-4 opacity-50" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-[#444649]">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <p className="text-2xl font-bold text-[#444649] mb-2">
            Felizmente, hoje temos muitos amigos.
          </p>
          <p className="text-lg text-slate-600">
            Mais de 180 clientes que viraram amigos
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

