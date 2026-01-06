import React from 'react'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="contato" ref={ref} className={`py-24 bg-gradient-to-br from-[#bed631] via-[#a8c02a] to-[#92aa23] relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar seu Empreendimento?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Vamos conversar sobre como podemos ajudar seu projeto a alcançar resultados extraordinários. 
          Solicite um diagnóstico gratuito e descubra o potencial do seu empreendimento.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group px-8 py-4 bg-white hover:bg-slate-50 text-[#a8c02a] font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
            Solicitar Diagnóstico Gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Falar com Especialista
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>contato@cia360.com.br</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>(11) 0000-0000</span>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 pt-8 border-t border-white/30">
          <p className="text-white/80 text-sm">
            ✓ Mais de 350 cases de sucesso • ✓ Atendimento 24/7 • ✓ Especialistas em mercado imobiliário
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA

