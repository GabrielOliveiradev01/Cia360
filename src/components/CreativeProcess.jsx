import React, { useState } from 'react'
import { Search, Lightbulb, Palette, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CreativeProcess = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Search,
      title: 'Descoberta',
      description: 'Entendemos profundamente o empreendimento, o público-alvo e o mercado. Mergulhamos no conceito arquitetônico e na essência do projeto.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Lightbulb,
      title: 'Conceituação',
      description: 'Criamos o conceito criativo que traduz a essência do empreendimento em uma narrativa visual e emocional única.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Palette,
      title: 'Criação',
      description: 'Desenvolvemos todas as peças visuais, materiais e campanhas. Cada elemento é pensado para potencializar os diferenciais do produto.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Rocket,
      title: 'Lançamento',
      description: 'Executamos a campanha com precisão e agilidade. Monitoramos métricas em tempo real e ajustamos estratégias conforme necessário.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: CheckCircle2,
      title: 'Otimização',
      description: 'Acompanhamos resultados, analisamos performance e otimizamos continuamente para garantir o máximo de eficiência e conversão.',
      color: 'from-[#bed631] to-[#a8c02a]',
      bgColor: 'bg-[#f1f1f1]',
      borderColor: 'border-[#bed631]'
    },
  ]

  return (
    <section ref={ref} className={`py-24 bg-white relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#bed631] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a8c02a] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Nosso <span className="text-[#bed631]">Processo Criativo</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Do conceito à execução, cada etapa é pensada para criar campanhas que realmente funcionam
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="flex justify-between items-start">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep === index
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 cursor-pointer"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-br ${step.color} scale-110 shadow-lg` 
                        : 'bg-white border-4 border-slate-300 scale-100'
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-slate-400'
                      }`} />
                      {isActive && (
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#bed631] to-[#a8c02a] opacity-20 animate-pulse"></div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className={`w-full max-w-xs p-6 rounded-xl border-2 transition-all duration-300 ${
                      isActive 
                        ? `${step.bgColor} ${step.borderColor} shadow-xl transform -translate-y-2` 
                        : 'bg-white border-slate-200'
                    }`}>
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isActive ? 'text-[#444649]' : 'text-slate-600'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-slate-700' : 'text-slate-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number */}
                    <div className={`mt-6 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-br ${step.color} text-white` 
                        : 'bg-slate-200 text-slate-500'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === index || activeStep === null
            return (
              <div
                key={index}
                className={`relative pl-12 pb-8 border-l-2 transition-all duration-300 ${
                  isActive ? 'border-[#bed631]' : 'border-slate-200'
                }`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                {/* Step Circle */}
                <div className={`absolute -left-6 top-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-br ${step.color} shadow-lg` 
                    : 'bg-white border-2 border-slate-300'
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`} />
                </div>

                {/* Step Content */}
                <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  isActive 
                    ? `${step.bgColor} ${step.borderColor} shadow-lg` 
                    : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-[#444649]' : 'text-slate-600'
                    }`}>
                      {step.title}
                    </h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      isActive 
                        ? `bg-gradient-to-br ${step.color} text-white` 
                        : 'bg-slate-200 text-slate-500'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  {(isActive || activeStep === null) && (
                    <p className="text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#bed631] to-[#a8c02a] text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <span>Quer conhecer nosso processo na prática?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeProcess

