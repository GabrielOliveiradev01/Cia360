import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    empresa: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Metodologia', href: '#metodologia' },
      { label: 'Lançamentos', href: '#cases' },
    ],
    recursos: [
      { label: 'Blog', href: '#blog' },
      { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
    ],
    legal: [
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Termos de Uso', href: '#termos' },
      { label: 'LGPD', href: '#lgpd' },
    ],
  }

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCu_63yrlAcgS20a6EoZHz2w', label: 'YouTube', target: '_blank', rel: 'noopener noreferrer' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/cia-da-comunica%C3%A7%C3%A3o', label: 'LinkedIn', target: '_blank', rel: 'noopener noreferrer' },
    { icon: Instagram, href: 'https://www.instagram.com/ciadom2/', label: 'Instagram', target: '_blank', rel: 'noopener noreferrer' },
    { icon: Facebook, href: 'https://www.facebook.com/ciadom2/', label: 'Facebook', target: '_blank', rel: 'noopener noreferrer' },
  ]

  return (
    <footer className="bg-[#161f31] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logociaescura.png"
              alt="CIA360"
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 mb-4 leading-relaxed">
              Agência especializada em comunicação imobiliária. Mais de 20 anos transformando empreendimentos em sucessos.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.target}
                    rel={social.rel}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[#161f31]/80 hover:bg-[#bed631] flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[#bed631] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="hover:text-[#bed631] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-[#bed631] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#bed631] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  São Paulo, SP<br />Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#bed631] flex-shrink-0" />
                <a href="tel:+551130570227" className="hover:text-[#bed631] transition-colors">
                  (11) 3057-0227
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#bed631] flex-shrink-0" />
                <a href="https://wa.me/5511989539200" target="_blank" rel="noopener noreferrer" className="hover:text-[#bed631] transition-colors">
                  +55 11 98953-9200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#bed631] flex-shrink-0" />
                <a href="mailto:olá@cia360.com.br" className="hover:text-[#bed631] transition-colors">
                  olá@cia360.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} CIA360. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-[#bed631] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

