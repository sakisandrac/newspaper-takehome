import React from 'react'
import { Article } from '../../types'

interface ArticleProps {
  article: Article
}
const ArticleCard = ({article}: ArticleProps) => {
  return (
    <section className='article-container'>
      <div className='article-line'></div>
      <div className='article-text-container'>
        <p>{article.title}</p>
      </div>
    </section>
  )
}

export default ArticleCard