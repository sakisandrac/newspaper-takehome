import React from "react";
import { Article } from "../../types";
import "./ArticleCard.css";
import { Link } from "react-router-dom";
import { datePublished } from "../../utils";
import imgError from '../../images/404-error.png'

interface ArticleProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <section className="article-container">
      
      <div className="article-line"></div>
      <Link to={`/article/${article.publishedAt}`}>
      <div className="article-text-container">
        <p className="article-name">{article.source.name}</p>
        {article.urlToImage ? <img src={article.urlToImage} className="article-img" alt={article.description} /> : <img className='article-error' src={imgError} />}
        <div className="article-text">
          <p className="article-title">{article.title}</p>
          <p className="text">
            {article.description}
          </p>
          <p className="article-date">Published: {datePublished(article.publishedAt)}</p>
        </div>
      </div>
      </Link>
    </section>
  );
};

export default ArticleCard;
