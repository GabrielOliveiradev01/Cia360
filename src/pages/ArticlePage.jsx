import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, User } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogArticles } from '../data/blogData'

const ArticlePage = () => {
  const { slug } = useParams()
  const article = blogArticles.find(art => art.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-[#444649] mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-[#bed631] hover:underline">
            Voltar para o blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#bed631] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o blog
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#bed631] text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#444649] mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-[#f1f1f1] border border-slate-200">
            <h2 className="text-2xl font-bold text-[#444649] mb-4">
              Quer transformar seu empreendimento em sucesso?
            </h2>
            <p className="text-slate-700 mb-6">
              Entre em contato com a CIA360 e descubra como podemos ajudar seu projeto a alcançar resultados extraordinários.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#bed631] hover:bg-[#a8c02a] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default ArticlePage

