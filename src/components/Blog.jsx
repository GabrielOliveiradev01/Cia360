import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { blogArticles } from '../data/blogData'

const Blog = () => {
  const [ref, isVisible] = useScrollAnimation(0.2)

  // Mostrar apenas os 3 primeiros artigos na landing page
  const articles = blogArticles.slice(0, 3)

  return (
    <section id="blog" ref={ref} className={`py-24 bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#444649] mb-4">
            Conteúdo e <span className="text-[#bed631]">Insights</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compartilhamos conhecimento e experiências do mercado imobiliário
          </p>
        </div>

        {/* Articles Grid - Layout em 2 colunas no desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`group bg-white rounded-2xl border border-slate-200 hover:border-[#bed631] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#bed631] text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#444649] mb-3 group-hover:text-[#bed631] transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[#bed631] font-semibold hover:gap-3 transition-all group/link"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#bed631] font-semibold hover:gap-3 transition-all"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog

