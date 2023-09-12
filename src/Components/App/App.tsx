import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { getArticles, getCategory } from "../../apiCalls";
import { data } from "../../data/data";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import { ArticleData } from "../../types";

function App() {
  const [articles, setArticles] = useState<ArticleData>(data);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false)
  const [category, setCategory] = useState<string>("")

  const location = useLocation().pathname
  useEffect(() => {
    setLoading(true)
    if(location === '/') {
    getArticles().then((data) => {
      setLoading(false)
      console.log(data)
      setArticles(data)
    })
    .catch(err => {
      setErr(true)
      console.log(err)
    })
  } else {
    getCategory(category).then((data) => {
      setLoading(false)
      console.log(data)
      setArticles(data)
    })
    .catch(err => {
      setErr(true)
      console.log(err)
    })
  }
  },[category])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home articles={articles} loading={loading} err={err} setCategory={setCategory}/>} />
        <Route path="/article/:id" element={<ArticleDetails articles={articles}/>} />
        <Route path="/category/:category" element={<Home articles={articles} loading={loading} err={err} setCategory={setCategory}/>} />
        <Route path="/category/article/:id" element={<ArticleDetails articles={articles} />} />
      </Routes>
    </div>
  );
}

export default App;
