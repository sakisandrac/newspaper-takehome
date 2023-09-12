import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";
import { getArticles } from "../../apiCalls";
import { data } from "../../data/data";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import { ArticleData } from "../../types";

function App() {
  const [articles, setArticles] = useState<ArticleData>(data);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false)

  useEffect(() => {
    setLoading(true)
    getArticles().then((data) => {
      setLoading(false)
      console.log(data)
      setArticles(data)
    })
    .catch(err => {
      setErr(true)
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home articles={articles} loading={loading} err={err}/>} />
        <Route path="/article/:id" element={<ArticleDetails articles={articles}/>} />
        <Route path="/category/:category" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
