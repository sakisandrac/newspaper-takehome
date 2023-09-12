import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategory } from '../../apiCalls';
import { ArticleData } from '../../types';
import ArticleCard from '../ArticleCard/ArticleCard';

const Search = () => {
  const { category } = useParams()
  const [articles, setArticles] = useState<ArticleData | null>(null)

  useEffect(() => {
    // getCategory(category).then((data) => {
    //   console.log(data)
    //   setArticles(data)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }, [category])

    const articleEls = articles?.articles.map((art) => {
      if (art.content !== "[Removed]") {
        return <ArticleCard key={art.title} article={art} />
      }
    });

  return (
    <div className="home-page">
      <h1>{category}</h1>
      <h2><i>The top stories from today's news in the United States</i></h2>
      <main className="home-main">{articleEls}</main>
    </div>
  );
}

export default Search