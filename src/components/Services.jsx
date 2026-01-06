import React from 'react'
import { Megaphone, Building2, BarChart3, Palette, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const services = [
    {
      icon: Megaphone,
      title: 'Propaganda',
      description: 'Desenvolver campanhas todas as agências fazem. A CIA vai além do lugar comum e se envolve de corpo e alma na comunicação integral do empreendimento, desde o projeto até a venda da última unidade.',
    },
    {
      icon: Building2,
      title: 'Branding',
      description: 'Construímos e gerenciamos marcas com personalidade e sinergia, para o seu fortalecimento perante o público-alvo.',
    },
    {
      icon: BarChart3,
      title: 'Performance',
      description: 'Somos especialistas em monitoramento e gerenciamento de métricas. Quer melhorar a performance? Gerar mais leads, visitas no stand de vendas? Nós turbinamos seu desempenho de um jeito assertivo e descomplicado.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Trabalhamos na construção de uma essência visual única que traga personalidade através de uma proposta que potencialize os diferenciais do produto ou serviço oferecidos pela marca.',
    },
  ]

  return (
    <section id="servicos" ref={ref} className={`py-24 bg-[#f1f1f1] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            O Que <span className="text-[#bed631]">Fazemos?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Como sabiamente nos ensina o clássico da literatura mundial "Alice no País das Maravilhas": 
            "Se você não sabe onde quer chegar, qualquer caminho serve".
          </p>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            Antes de qualquer coisa, a CIA estabelece metas e define, junto com o cliente, o que deve ser feito 
            e quais os recursos mais adequados para se obter os melhores resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-[#f1f1f1] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#bed631]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#444649] mb-4 group-hover:text-[#bed631] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#bed631]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Group Info */}
        <div className={`mt-16 p-8 md:p-12 rounded-2xl bg-white border-2 border-primary-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <Award className="w-12 h-12 text-[#bed631]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#444649] mb-4">O Grupo CIA</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Agência Digital – Produção gráfica – Ilustrações Digitais – Produção e edição de vídeo
              </p>
              <p className="text-slate-600 leading-relaxed">
                Formado por empresas que atuam em linha para melhor atender todas as necessidades dos seus clientes 
                e que são responsáveis por todo o processo de Comunicação. Da criação dos conceitos e peças à produção 
                gráfica das campanhas, da geração de leads qualificados nas mídias online, passando pela edição de vídeos 
                para TV e Cinema, até a produção de ilustrações digitais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

