import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Dejavu = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 md:p-12 rounded-2xl bg-[#f1f1f1] border border-slate-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Foto redonda à esquerda */}
            <div className="flex-shrink-0">
              <img
                src="/foto-do-ceo.jpeg"
                alt="Ivan Tarandach"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            {/* Texto à direita */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[#444649] mb-6">O Déjà-vu das Campanhas Imobiliárias</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                A CIA nasceu da insatisfação de um arquiteto que não aguentava mais ver a mesmice das campanhas 
                publicitárias do mercado imobiliário que não se identificavam com o conceito e o partido arquitetônico 
                propostos pelos incorporadores. Dessa forma, concluída a sua pós-graduação, Ivan Tarandach orientou 
                sua vida profissional para além do simples desenho de projetos.
              </p>
              <p className="text-lg text-slate-700 mt-4 leading-relaxed">
                O mercado perdeu um arquiteto mas ganhou um verdadeiro "Trem-Bala" em forma de publicitário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dejavu



