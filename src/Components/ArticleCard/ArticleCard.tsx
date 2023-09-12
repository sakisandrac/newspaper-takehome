import React from 'react'
import { Article } from '../../types'
import './ArticleCard.css'
import { Link } from 'react-router-dom'

interface ArticleProps {
  article: Article
}

const ArticleCard = ({article}: ArticleProps) => {
  return (
    <section className='article-container'>
      <div className='article-line'></div>
      <div className='article-text-container'>
        <p className='article-name'>{article.source.name}</p>
        <img src={article.urlToImage} className='article-img'/>
        <div className='article-text'>
          <p className='article-title'>{article.title}</p>
          <p className='text'>{article.content.split('[')[0]}<Link to={`/article/${article.publishedAt}`}>[continue reading]</Link></p>
        </div>

      </div>
    </section>
  )
}

export default ArticleCard