import React from 'react'
import { Target, Zap, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const pillars = [
    {
      icon: Target,
      title: 'Análise',
      description: 'Estabelecemos metas e definimos, junto com o cliente, o que deve ser feito e quais os recursos mais adequados para se obter os melhores resultados.',
      color: 'text-[#bed631]'
    },
    {
      icon: Zap,
      title: 'Estratégia',
      description: 'Participamos do desenvolvimento e formatação do empreendimento desde a origem, da gestação até a maturidade das nossas "crias".',
      color: 'text-[#444649]'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Cada produto é como um filho único. Trabalhamos 24h/dia, 7x na semana para garantir que cada empreendimento alcance seu potencial máximo.',
      color: 'text-[#bed631]'
    },
  ]

  return (
    <section id="sobre" ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-6">
            Sobre <span className="text-[#bed631]">Nós</span>
          </h2>
          <div className="mb-6">
            <div className="text-xl md:text-2xl font-bold text-[#444649] mb-2">
              NOSSO CORE BUSINESS É
            </div>
            <div className="text-5xl md:text-6xl font-bold text-[#bed631] mb-2">
              100%
            </div>
            <div className="text-xl md:text-2xl font-bold text-[#444649]">
              IMOBILIÁRIO
            </div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6">
            Antes de mais nada, vamos avisando: Somos diferentes! Não buscamos a grandeza, preferimos a eficiência!
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-lg mb-6">
              Somos uma agência sob medida, nossos clientes e suas necessidades são atendidas individualmente e não existem truques e nem fórmulas mágicas de prateleira para isso.
            </p>
            <p className="text-lg mb-6">
              Para a CIA, cada produto é como um filho único e fazemos questão de participar desde a gestação até a maturidade das nossas "crias".
            </p>
            <p className="text-lg mb-6">
              Em mais de 20 anos de atuação são mais de 1500 lançamentos onde, de alguma forma, acrescentamos valor ao produto final.
            </p>
            <p className="text-lg mb-6">
              Assim é o jeito CIA de trabalhar a comunicação. Uma agência que convive e sobrevive no competitivo mercado imobiliário.
            </p>
          </div>
          
          {/* Destaque Trabalhamos */}
          <div className="mt-8 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#444649]">
              Trabalhamos 24h/dia 7x na semana
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-[#f1f1f1] border border-slate-200 hover:border-[#bed631] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-[#444649] mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

