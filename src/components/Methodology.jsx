import React from 'react'
import { Search, Target, Rocket, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Methodology = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Análise e Diagnóstico',
      description: 'Compreendemos profundamente o empreendimento, seu conceito arquitetônico e o público-alvo. Estabelecemos metas claras e definimos os recursos mais adequados.',
      color: 'from-[#161f31] to-[#161f31]'
    },
    {
      number: '02',
      icon: Target,
      title: 'Estratégia Personalizada',
      description: 'Criamos uma estratégia sob medida, sem fórmulas de prateleira. Cada produto é único e merece uma abordagem específica que potencialize seus diferenciais.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Execução e Monitoramento',
      description: 'Trabalhamos 24h/dia, 7x na semana. Monitoramos métricas em tempo real, geramos leads qualificados e turbinamos o desempenho de forma assertiva.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Resultados e Crescimento',
      description: 'Acompanhamos desde a gestação até a maturidade. Mais de 350 cases onde acrescentamos valor ao produto final e transformamos clientes em amigos.',
      color: 'from-orange-500 to-orange-600'
    },
  ]

  return (
    <section id="metodologia" ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Nossa <span className="text-[#bed631]">Metodologia</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um processo estruturado que garante resultados desde a concepção até a venda da última unidade
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#bed631] via-[#f1f1f1] via-[#bed631] to-[#f1f1f1]"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 ${
                      index % 2 === 0 ? 'bg-[#f1f1f1]' : 'bg-[#bed631]'
                    }`}>
                      <Icon className={`w-16 h-16 ${
                        index % 2 === 0 ? 'text-[#bed631]' : 'text-white'
                      }`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-[#bed631] border-4 border-white' : 'bg-white border-4 border-[#bed631]'
                    }`}>
                      <span className={`text-xl font-bold ${
                        index % 2 === 0 ? 'text-white' : 'text-[#bed631]'
                      }`}>{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center md:text-left`}>
                    <div className="bg-[#f1f1f1] p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[#444649] mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <p className="text-lg text-slate-600 mb-6">
            Pronto para transformar seu empreendimento em um case de sucesso?
          </p>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#bed631] hover:bg-[#a8c02a] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Methodology

