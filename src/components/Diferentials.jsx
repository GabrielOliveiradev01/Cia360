import React from 'react'
import { CheckCircle2, Clock, Users, Award, Target, Zap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Diferentials = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const diferentials = [
    {
      icon: Target,
      title: 'Foco 100% Imobiliário',
      description: 'Especialização total no mercado imobiliário. Conhecemos profundamente as nuances e necessidades deste setor.',
      color: 'text-slate-500'
    },
    {
      icon: Clock,
      title: 'Disponibilidade 24/7',
      description: 'Trabalhamos 24 horas por dia, 7 dias por semana. Seu empreendimento nunca para, nós também não.',
      color: 'text-slate-500'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único. Não usamos fórmulas de prateleira. Criamos soluções sob medida para cada projeto.',
      color: 'text-slate-500'
    },
    {
      icon: Award,
      title: 'Mais de 1500 Lançamentos',
      description: 'Experiência comprovada em mais de 20 anos de atuação. Mais de 1500 empreendimentos onde acrescentamos valor.',
      color: 'text-slate-500'
    },
    {
      icon: Zap,
      title: 'Resultados Comprovados',
      description: 'Geração de mais de 10.000 leads por mês. Campanhas que convertem e geram resultados reais.',
      color: 'text-slate-500'
    },
    {
      icon: CheckCircle2,
      title: 'Acompanhamento Completo',
      description: 'Participamos desde a gestação até a maturidade. Do projeto até a venda da última unidade.',
      color: 'text-slate-500'
    },
  ]

  return (
    <section ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Nossos <span className="text-[#bed631]">Diferenciais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            O que nos torna únicos no mercado imobiliário
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group p-6 bg-[#f1f1f1] rounded-xl border border-slate-200 hover:border-[#bed631] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-[#444649] mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Highlight */}
        <div className={`mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#bed631] to-[#a8c02a] text-white text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="text-3xl font-bold mb-4">O Metro Mais Premado do Mercado</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Prêmios são importantes mas eles são dos clientes. Não colocamos na parede os nossos sucessos 
            e nem colocamos sob o tapete os nossos insucessos: aprendemos com eles!
          </p>
          <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto">
            A cada instante, o mercado imobiliário muda. Na mesma velocidade, a CIA se reinventa para ele.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Diferentials

