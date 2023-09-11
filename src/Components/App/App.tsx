import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Article from "../ArticleCard/ArticleCard";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";
import { getArticles } from "../../apiCalls";
import { data } from "../../data/data";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import { ArticleData } from "../../types";

function App() {
  const [articles, setArticles] = useState<ArticleData>(data);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getArticles().then(data => {
  //     setArticles(data)
  //   })
  // },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
