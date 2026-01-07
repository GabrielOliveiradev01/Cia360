import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'
import WorkWithUsPage from './pages/WorkWithUsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<ArticlePage />} />
      <Route path="/trabalhe-conosco" element={<WorkWithUsPage />} />
    </Routes>
  )
}

export default App

