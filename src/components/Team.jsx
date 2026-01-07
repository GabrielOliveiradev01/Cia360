import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Team = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)
  const [imageErrors, setImageErrors] = useState({})

  const teamMembers = [
    {
      name: 'CEO',
      role: 'Chief Executive Officer',
      photo: '/foto-do-ceo.jpeg',
    },
    // Adicione mais membros da equipe aqui
    // {
    //   name: 'Nome do Membro',
    //   role: 'Cargo',
    //   photo: '/foto.jpg',
    // },
  ]

  return (
    <section id="equipe" ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Nossa <span className="text-[#bed631]">Equipe</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça os profissionais que fazem a diferença na CIA360
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-[#f1f1f1] rounded-2xl border border-slate-200 hover:border-[#bed631] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-slate-200">
                {!imageErrors[index] ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [index]: true }))
                    }}
                    onLoad={() => {
                      setImageErrors(prev => ({ ...prev, [index]: false }))
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#bed631] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                      </div>
                      <p className="text-slate-500 text-sm">Foto não disponível</p>
                    </div>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#bed631] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#444649] mb-2 group-hover:text-[#bed631] transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

