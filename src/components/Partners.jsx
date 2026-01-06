import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Partners = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  // Lista completa de logos dos parceiros - atualizada com todos os arquivos da pasta
  const partners = [
    { name: 'AB Mais', logo: '/Parceiros/AB MAIS LOGO.png' },
    { name: 'Árbore', logo: '/Parceiros/ARBORE SIGNATURE.png' },
    { name: 'Argo', logo: '/Parceiros/ARGO LOG.jpg' },
    { name: 'Arie', logo: '/Parceiros/arie.png' },
    { name: 'BLM', logo: '/Parceiros/blm.png' },
    { name: 'Canopus', logo: '/Parceiros/canopus.svg' },
    { name: 'Capital', logo: '/Parceiros/CAPITAL LOGO.png' },
    { name: 'CNL', logo: '/Parceiros/CNL LOGO.webp' },
    { name: 'Consciente', logo: '/Parceiros/CONSCIENTE.png' },
    { name: 'Copec', logo: '/Parceiros/COPEC LOGO.png' },
    { name: 'Cosentino', logo: '/Parceiros/COSENTINO.png' },
    { name: 'EPH', logo: '/Parceiros/EPH.png' },
    { name: 'Exemplar Construções', logo: '/Parceiros/EXEMPLAR CONTRUÇÕES LOGO.png' },
    { name: 'FFI', logo: '/Parceiros/FFI.png' },
    { name: 'Filipo', logo: '/Parceiros/filipo.svg' },
    { name: 'Finamob', logo: '/Parceiros/FINAMOB.png' },
    { name: 'Galli', logo: '/Parceiros/galli.webp' },
    { name: 'GCS Construções', logo: '/Parceiros/GCS CONTRUÇÕES LOGO.svg' },
    { name: 'Granlote', logo: '/Parceiros/granlote.svg' },
    { name: 'Gremp', logo: '/Parceiros/gremp3.png' },
    { name: 'Grupo Macuco', logo: '/Parceiros/GRUPO MACUCO.webp' },
    { name: 'HBR Brokers', logo: '/Parceiros/hbrbrokers.png' },
    { name: 'Herc', logo: '/Parceiros/herc.png' },
    { name: 'Holos', logo: '/Parceiros/holos.png' },
    { name: 'Iben Engenharia', logo: '/Parceiros/IBEN ENGENHARIA.png' },
    { name: 'Ibenx', logo: '/Parceiros/ibenx.png' },
    { name: 'INC', logo: '/Parceiros/INC.png' },
    { name: 'JCR', logo: '/Parceiros/JCR LOGO.png' },
    { name: 'Contrulike', logo: '/Parceiros/Logocontruliketransparente.png' },
    { name: 'Lumy', logo: '/Parceiros/LUMY LOGO.webp' },
    { name: 'Maná', logo: '/Parceiros/MANÁ.png' },
    { name: 'MB Igucci', logo: '/Parceiros/mbigucci.webp' },
    { name: 'Migras', logo: '/Parceiros/migras.png' },
    { name: 'Mitre', logo: '/Parceiros/MITRE.png' },
    { name: 'Mondo Tebas', logo: '/Parceiros/MONDO TEBAS LOGO.png' },
    { name: 'MSH', logo: '/Parceiros/msh.png' },
    { name: 'MXP', logo: '/Parceiros/mxp.png' },
    { name: 'Phex', logo: '/Parceiros/PHEX LOGO.png' },
    { name: 'Plano e Plano', logo: '/Parceiros/PLANO E PLANO LOGO.png' },
    { name: 'Próhidro', logo: '/Parceiros/próhidro.png' },
    { name: 'Projeto Mosaico', logo: '/Parceiros/PROJETO MOSAICO LOGO.svg' },
    { name: 'Proxx', logo: '/Parceiros/PROXX LOG.png' },
    { name: 'Sancam', logo: '/Parceiros/sancam.svg' },
    { name: 'SIR Brasil', logo: '/Parceiros/SIR BRASIL LOGO.avif' },
    { name: 'Sivercon', logo: '/Parceiros/sivercon.png' },
    { name: 'Solidi', logo: '/Parceiros/SOLIDI LOGO.svg' },
    { name: 'Star Opera', logo: '/Parceiros/STAR OPERA LOGO.png' },
    { name: 'Tebas', logo: '/Parceiros/TEBAS LOGO.jpg' },
    { name: 'Ticem', logo: '/Parceiros/TICEM.png' },
    { name: 'UTG Engenharia', logo: '/Parceiros/UTG ENGENHARIA LOGO.webp' },
    { name: 'V2', logo: '/Parceiros/v2.png' },
    { name: 'Vinx', logo: '/Parceiros/VINX LOGO.png' },
    { name: 'WTC', logo: '/Parceiros/wtc.jpeg' },
    { name: 'Wellbeing', logo: '/Parceiros/WELLBEING.png' },
    { name: 'ZIII', logo: '/Parceiros/ZIII LOGO.png' },
  ]

  return (
    <section id="parceiros" ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Nossos <span className="text-[#bed631]">Parceiros</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empresas que confiam na CIA360 para transformar seus empreendimentos em sucessos
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group flex items-center justify-center p-4 md:p-6 bg-white rounded-lg border border-slate-200 hover:border-[#bed631] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 md:max-h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="text-slate-400 text-xs text-center">${partner.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-lg text-slate-600">
            Mais de <span className="font-bold text-[#444649]">{partners.length} parceiros</span> que confiam em nosso trabalho
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners

