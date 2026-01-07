import React, { useState, useEffect, useRef } from 'react'
import { X, Plus } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const OurWorks = () => {
  const [ref, isVisible] = useScrollAnimation(0.1) // Threshold menor para aparecer mais cedo
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const imageRefs = useRef({})

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  // Intersection Observer para carregar imagens apenas quando visíveis
  useEffect(() => {
    if (!isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = entry.target.dataset.imageId
            if (imageId && !loadedImages.has(imageId)) {
              setLoadedImages((prev) => new Set([...prev, imageId]))
            }
          }
        })
      },
      {
        rootMargin: '100px', // Começa a carregar 100px antes de aparecer
        threshold: 0.01,
      }
    )

    // Observa os containers, não as imagens
    Object.values(imageRefs.current).forEach((containerRef) => {
      if (containerRef) observer.observe(containerRef)
    })

    return () => {
      Object.values(imageRefs.current).forEach((containerRef) => {
        if (containerRef) observer.unobserve(containerRef)
      })
    }
  }, [isVisible, loadedImages])

  const works = [
    // Novas obras (em primeiro lugar)
    {
      id: 1,
      title: 'Quartier Brooklin',
      image: '/Nossas obras/1_ QUARTIER BROOKLIN.png',
    },
    {
      id: 2,
      title: 'Loomin Klabin',
      image: '/Nossas obras/2_ LOOMIN KLABIN.png',
    },
    {
      id: 3,
      title: 'Veríssimo Mooca',
      image: '/Nossas obras/3_ VERISSIMO MOOCA.png',
    },
    {
      id: 4,
      title: 'Argo',
      image: '/Nossas obras/4_ ARGO.png',
    },
    {
      id: 5,
      title: 'Aura Tamboré',
      image: '/Nossas obras/5_ AURA TAMBORÉ.png',
    },
    {
      id: 6,
      title: 'Nid Alphaville',
      image: '/Nossas obras/6_ NID ALPHAVILLE.png',
    },
    {
      id: 7,
      title: 'World Trade Center Goiânia',
      image: '/Nossas obras/7_ WORLD TRADE CENTER GOIÂNIA.png',
    },
    {
      id: 8,
      title: 'Mirante Boa Vista',
      image: '/Nossas obras/8_ MIRANTE BOA VISTA.png',
    },
    {
      id: 9,
      title: 'LED VL Madalena',
      image: '/Nossas obras/9_ LED VL MADALENA.png',
    },
    {
      id: 10,
      title: 'Grand Garden Residence',
      image: '/Nossas obras/10_ GRAND GARDEN RESIDENCE.png',
    },
    {
      id: 11,
      title: 'Asteri',
      image: '/Nossas obras/11_ ASTERI.png',
    },
    {
      id: 12,
      title: 'Grand Yacht',
      image: '/Nossas obras/12_ GRAND YACHT.png',
    },
    {
      id: 13,
      title: 'Grand Ocean',
      image: '/Nossas obras/13_ GRAND OCEAN.png',
    },
    {
      id: 14,
      title: 'Mansão José Lages Filho',
      image: '/Nossas obras/14_ MANSÃO JOSÉ LAGES FILHO.png',
    },
    {
      id: 15,
      title: 'The Icon Park Office',
      image: '/Nossas obras/15_ THE ICON PARK OFFICE.png',
    },
    {
      id: 16,
      title: 'Anhagabaú Design',
      image: '/Nossas obras/16_ ANHAGABAÚ DESIGN.png',
    },
    {
      id: 17,
      title: 'Authoria by Tebas',
      image: '/Nossas obras/17_ AUTHORIA BY TEBAS.png',
    },
    {
      id: 18,
      title: 'Ávora by Tebas',
      image: '/Nossas obras/18_ ÁVORA BY TEBAS.png',
    },
    {
      id: 19,
      title: 'Quintas Cidade Jardim',
      image: '/Nossas obras/19_ QUINTAS CIDADE JARDIM.png',
    },
    {
      id: 20,
      title: 'Galli',
      image: '/Nossas obras/20_ GALLI.png',
    },
    // Obras antigas (depois das novas)
    {
      id: 21,
      title: 'WTC Port',
      image: '/Nossas obras/wtc-port.jpg',
    },
    {
      id: 22,
      title: 'Klub',
      image: '/Nossas obras/klub.jpg',
    },
    {
      id: 23,
      title: 'Kazza Diretiva',
      image: '/Nossas obras/kazza-diretivaV2.jpg',
    },
    {
      id: 24,
      title: 'Oasis Árbore',
      image: '/Nossas obras/oasis-arbore.jpg',
    },
    {
      id: 25,
      title: 'Qual Imóvel',
      image: '/Nossas obras/09-Qual-Imóvel-Junho-404x266mm_v4.jpg',
    },
    {
      id: 26,
      title: 'Campobasso Trianon',
      image: '/Nossas obras/Campobasso_trianon.jpg',
    },
    {
      id: 27,
      title: 'Reserva Mundi',
      image: '/Nossas obras/reserva-mundiV2.jpg',
    },
    {
      id: 28,
      title: 'Hum Granada',
      image: '/Nossas obras/hum-granadaV2.jpg',
    },
    {
      id: 29,
      title: 'Authoria',
      image: '/Nossas obras/authoria-campanhaV2.jpg',
    },
    {
      id: 30,
      title: 'Emoções Horizonte',
      image: '/Nossas obras/emocoes-horizonte-vila-nova.jpg',
    },
    {
      id: 31,
      title: 'ACT',
      image: '/Nossas obras/act.jpg',
    },
    {
      id: 32,
      title: 'SKY',
      image: '/Nossas obras/skyV2.jpg',
    },
    {
      id: 33,
      title: 'Vinx',
      image: '/Nossas obras/Vinx_forma.png',
    },
    {
      id: 34,
      title: 'Árbore',
      image: '/Nossas obras/arbore-campanhaV2.jpg',
    },
    {
      id: 35,
      title: 'Urban',
      image: '/Nossas obras/urbanV2.jpg',
    },
    {
      id: 36,
      title: 'Paris',
      image: '/Nossas obras/paris-campanhaV2.jpg',
    },
    {
      id: 37,
      title: 'BlueLine',
      image: '/Nossas obras/blueline.png',
    },
    {
      id: 38,
      title: 'Palazzo',
      image: '/Nossas obras/palazzo-campanhaV2.jpg',
    },
    {
      id: 39,
      title: 'JZM',
      image: '/Nossas obras/jzm-campanhaV2.jpg',
    },
  ]

  return (
    <>
      <section id="obras" ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-6">
              NOSSAS <span className="text-[#bed631]">OBRAS</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Após mais de <strong className="text-[#444649]">20 anos de atuação</strong>, temos como filosofia participar do <strong className="text-[#444649]">desenvolvimento e formatação do empreendimento</strong> desde a origem.
              </p>
              <p>
                São mais de <strong className="text-[#444649]">150 cases</strong> onde, de alguma forma, acrescentamos valor ao produto final. Seja na arquitetura, no paisagismo, na decoração de interiores, e claro, na sua comunicação.
              </p>
            </div>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
            {works.map((work, index) => {
              // Carrega as primeiras 15 imediatamente quando a seção aparece, depois usa lazy loading
              const shouldLoad = isVisible && (loadedImages.has(work.id.toString()) || index < 15)
              
              return (
                <div
                  key={work.id}
                  ref={(el) => {
                    if (el) imageRefs.current[work.id] = el
                  }}
                  data-image-id={work.id}
                  className={`group relative overflow-hidden cursor-pointer aspect-square ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${Math.min(index * 0.02, 0.4)}s` }}
                  onClick={() => setSelectedImage(work)}
                >
                  {/* Placeholder enquanto não carrega */}
                  {!shouldLoad && (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-slate-400/30"></div>
                    </div>
                  )}
                  
                  {/* Image - mostra toda a imagem sem cortes */}
                  {shouldLoad && (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onLoad={() => {
                        setLoadedImages((prev) => new Set([...prev, work.id.toString()]))
                      }}
                    />
                  )}
                  
                  {/* Overlay com + no hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-[#bed631] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Plus className="w-8 h-8 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${works.length * 0.05 + 0.3}s` }}>
            <p className="text-lg text-slate-600 mb-4">
              Mais de <span className="font-bold text-[#444649]">{works.length} obras</span> de sucesso
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#bed631] hover:bg-[#a8c02a] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero um case de sucesso também
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white font-semibold text-lg">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default OurWorks
