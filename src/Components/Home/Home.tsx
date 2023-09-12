import React, { useEffect, useState } from "react";
import { ArticleData } from "../../types";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Home.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

interface HomeProps {
  articles: ArticleData;
  err: boolean
  loading: boolean
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const Home = ({ articles, err, loading, setCategory }: HomeProps) => {
  const articleEls = articles.articles.map((art) => <ArticleCard key={art.title + articles.articles.indexOf(art)} article={art} />);
  const location = useLocation().pathname
  const {category} = useParams()

  useEffect(() => {
  if(location !== '/') {
    console.log()
    setCategory(category!)
  }
  },[category])

  return (
    <div className="home-page">
      {err && <p>ERROR LOADING PAGE, PLEASE TRY AGAIN</p>}
      {!err && loading ? <p>LOADING...</p> : !err && 
      <>
        <h1>Headlines</h1>
        <h2><i>The top stories from today's news in the United States</i></h2>
        <main className="home-main">{articleEls}</main>
      </>
      }
    </div>
  );
};

export default Home;
