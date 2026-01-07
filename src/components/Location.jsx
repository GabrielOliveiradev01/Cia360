import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Location = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const address = {
    street: 'Av Engenheiro Luiz Carlos Berrini, 936',
    city: 'São Paulo, SP',
    zipCode: '04571-000',
    phone: '(11) 3057-0227',
    whatsapp: '+55 11 98953-9200',
    email: 'olá@cia360.com.br',
    hours: 'Segunda a Sexta: 9h às 18h'
  }


  return (
    <section id="localizacao" ref={ref} className={`py-24 bg-[#f1f1f1] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Nossa <span className="text-[#bed631]">Localização</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Venha nos visitar ou entre em contato
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Address Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#bed631]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#bed631]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444649] mb-2">Endereço</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {address.street}<br />
                    {address.city}<br />
                    CEP: {address.zipCode}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#bed631]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#bed631]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444649] mb-2">Telefone</h3>
                  <a href="tel:+551130570227" className="text-slate-700 hover:text-[#bed631] transition-colors block mb-2">
                    {address.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#bed631]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#bed631]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444649] mb-2">WhatsApp</h3>
                  <a href="https://wa.me/5511989539200" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-[#bed631] transition-colors block">
                    {address.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#bed631]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#bed631]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444649] mb-2">E-mail</h3>
                  <a href={`mailto:${address.email}`} className="text-slate-700 hover:text-[#bed631] transition-colors">
                    {address.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#bed631]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#bed631]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444649] mb-2">Horário de Atendimento</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {address.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full min-h-[500px]">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(address.street + ', ' + address.city)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização CIA360"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

