import React from 'react'
import { ArticleData } from '../../types'
import ArticleCard from '../Article/Article'
import './Home.css'

interface HomeProps {
  articles: ArticleData
}

const Home = ({articles}: HomeProps)=> {

  const articleEls = articles.articles.map(art => <ArticleCard article={art}/>)

  return (
    <div className='home-page'>
      <main className='home-main'>
        {articleEls}
      </main>
    </div>
  )
}

export default Home