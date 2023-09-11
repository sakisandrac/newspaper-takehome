import React from "react";
import { ArticleData } from "../../types";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Home.css";

interface HomeProps {
  articles: ArticleData;
}

const Home = ({ articles }: HomeProps) => {
  const articleEls = articles.articles.map((art) => <ArticleCard key={art.title} article={art} />);

  return (
    <div className="home-page">
      <h1>Headlines</h1>
      <h2><i>The top stories from today's news in the United States</i></h2>
      <main className="home-main">{articleEls}</main>
    </div>
  );
};

export default Home;
