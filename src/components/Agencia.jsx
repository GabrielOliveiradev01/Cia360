import React, { useState } from 'react'
import { Building2, Users, Lightbulb, Rocket, Award, Target, Zap, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Agencia = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: 'Quem Somos', icon: Building2 },
    { id: 1, label: 'Nossa História', icon: Rocket },
    { id: 2, label: 'Nossos Valores', icon: Heart },
    { id: 3, label: 'Nossa Missão', icon: Target },
  ]

  const valores = [
    {
      icon: Lightbulb,
      title: 'Criatividade Sem Limites',
      description: 'Não seguimos fórmulas prontas. Cada projeto é uma oportunidade de criar algo único e memorável.',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Zap,
      title: 'Agilidade e Eficiência',
      description: 'Trabalhamos rápido, mas nunca comprometemos a qualidade. Resultados que superam expectativas.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Parceria Verdadeira',
      description: 'Não somos apenas fornecedores. Somos parceiros que se envolvem de verdade com o sucesso do cliente.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Award,
      title: 'Excelência em Tudo',
      description: 'Buscamos a perfeição em cada detalhe. Do conceito à execução, tudo é pensado com cuidado.',
      color: 'from-purple-400 to-purple-600'
    },
  ]

  const timeline = [
    {
      year: '2000',
      title: 'O Início',
      description: 'A CIA nasce da insatisfação de um arquiteto com a mesmice das campanhas imobiliárias.',
      highlight: true
    },
    {
      year: '2005',
      title: 'Primeiros Sucessos',
      description: 'Consolidação no mercado com campanhas inovadoras que realmente conversavam com o público.',
    },
    {
      year: '2010',
      title: 'Expansão',
      description: 'Formação do Grupo CIA, agregando empresas especializadas em cada etapa da comunicação.',
    },
    {
      year: '2020',
      title: '1500+ Lançamentos',
      description: 'Marcamos mais de 1500 lançamentos de sucesso, sempre agregando valor aos empreendimentos.',
      highlight: true
    },
    {
      year: '2024',
      title: 'Reinvenção Contínua',
      description: 'A cada instante, o mercado muda. Na mesma velocidade, a CIA se reinventa para ele.',
    },
  ]

  return (
    <section ref={ref} className={`py-24 bg-gradient-to-b from-white to-[#f8f9fa] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            A <span className="text-[#bed631]">Agência</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mais do que uma agência publicitária. Somos criadores de histórias, construtores de marcas e 
            transformadores de empreendimentos em sucessos.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#bed631] text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-[#f1f1f1] border border-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-[#bed631]'}`} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Quem Somos */}
          {activeTab === 0 && (
            <div className={`grid md:grid-cols-2 gap-8 items-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#444649]">Somos Diferentes</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Antes de mais nada, vamos avisando: <strong>Somos diferentes!</strong> Não buscamos a grandeza, 
                  preferimos a eficiência!
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Somos uma <strong>agência sob medida</strong>. Nossos clientes e suas necessidades são atendidas 
                  individualmente e não existem truques e nem fórmulas mágicas de prateleira para isso.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Para a CIA, cada produto é como um <strong>filho único</strong> e fazemos questão de participar 
                  desde a gestação até a maturidade das nossas "crias".
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-2xl font-bold text-[#bed631]">
                    Trabalhamos 24h/dia 7x na semana
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/imagemcia100-imobiliario.png"
                    alt="100% MERCADO IMOBILIÁRIO - Nosso Core Business"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Nossa História */}
          {activeTab === 1 && (
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#bed631] via-[#a8c02a] to-[#bed631] hidden md:block"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* Year Badge */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                        item.highlight 
                          ? 'bg-[#bed631] text-white scale-110' 
                          : 'bg-white text-[#444649] border-4 border-[#bed631]'
                      }`}>
                        {item.year}
                      </div>
                      
                      {/* Content */}
                      <div className={`flex-1 pb-8 ${index < timeline.length - 1 ? 'border-b border-slate-200' : ''}`}>
                        <h4 className="text-2xl font-bold text-[#444649] mb-2">{item.title}</h4>
                        <p className="text-lg text-slate-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Nossos Valores */}
          {activeTab === 2 && (
            <div className={`grid md:grid-cols-2 gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              {valores.map((valor, index) => {
                const Icon = valor.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${valor.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#444649] mb-4">{valor.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{valor.description}</p>
                  </div>
                )
              })}
            </div>
          )}

          {/* Nossa Missão */}
          {activeTab === 3 && (
            <div className={`text-center max-w-4xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="mb-8">
                <Target className="w-20 h-20 text-[#bed631] mx-auto mb-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#444649] mb-6">
                Nossa Missão
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Transformar empreendimentos imobiliários em histórias de sucesso através de comunicação 
                criativa, estratégica e eficiente. Somos especialistas em criar campanhas que não apenas 
                vendem, mas que <strong>conectam</strong> o público com o conceito e a essência de cada projeto.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-[#bed631] mb-2">1500+</div>
                  <div className="text-slate-600">Lançamentos</div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-[#bed631] mb-2">20+</div>
                  <div className="text-slate-600">Anos de Experiência</div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <div className="text-4xl font-bold text-[#bed631] mb-2">100%</div>
                  <div className="text-slate-600">Foco Imobiliário</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Agencia

