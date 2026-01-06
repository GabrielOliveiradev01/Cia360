import React from 'react'
import { BarChart3, Target, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'

const StatItem = ({ icon: Icon, end, suffix = '', label, delay, isVisible }) => {
  const count = useCountUp(end, 0, 2000, isVisible)

  return (
    <div
      className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="text-white/90 text-sm md:text-base">{label}</div>
    </div>
  )
}

const Stats = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  const stats = [
    { icon: BarChart3, number: 5000, suffix: '+', label: 'Campanhas Geradas' },
    { icon: Target, number: 15000, suffix: '', label: 'Leads por Mês' },
    { icon: Users, number: 350, suffix: '+', label: 'Clientes que Viraram Amigos' },
  ]

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-r from-[#bed631] to-[#a8c02a] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              end={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

