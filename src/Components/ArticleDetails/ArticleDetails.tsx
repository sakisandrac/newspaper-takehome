import React from 'react'
import { Article, ArticleData } from '../../types'
import { useParams } from 'react-router-dom';
import './ArticleDetails.css'

interface ArticleDetailsProps {
  articles: ArticleData;
}

const ArticleDetails = ({articles}: ArticleDetailsProps) => {
const { id } = useParams()

  const foundArticle = () => {
    return articles.articles.find(art => art.publishedAt === id)
  }

  const datePublished = () => {
    return foundArticle()?.publishedAt.split('T')[0].split('-').reverse().join('-')
  }
  console.log(foundArticle())
  return (
    <div className='details-page'>
      <main className='details-main'>
        <section className='details-container'>
          <p className='details-title'>{foundArticle()?.title}</p>
          <p><span className='details-bold'>Source:</span> {foundArticle()?.source.name} |  <span className='details-bold'>Published:</span> {datePublished()}</p>
          <p><span className='details-bold'>Author:</span> {foundArticle()?.author}</p>
          <img className='details-img' src={foundArticle()?.urlToImage}></img>
          <p className='details-description'>{foundArticle()?.description}</p>
          <a href={foundArticle()?.url}>Link to Full Article</a>
        </section>
      </main>
    </div>
  )
}

export default ArticleDetails