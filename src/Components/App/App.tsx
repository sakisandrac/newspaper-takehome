import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { getArticles, getCategory } from "../../apiCalls";
import { data } from "../../data/data";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import { ArticleData } from "../../types";
import closeButton from '../../images/close_FILL0_wght400_GRAD0_opsz24.png'

function App() {
  const [articles, setArticles] = useState<ArticleData>(data);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const location = useLocation().pathname;
  useEffect(() => {
    setLoading(true);
    if (location === "/") {
      getArticles()
        .then((data) => {
          setLoading(false);
          console.log(data);
          setArticles(data);
        })
        .catch((err) => {
          setErr(true);
          console.log(err);
        });
    } else {
      getCategory(category)
        .then((data) => {
          setLoading(false);
          console.log(data);
          setArticles(data);
        })
        .catch((err) => {
          setErr(true);
          console.log(err);
        });
    }
  }, [category]);

  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {menuOpen ? 
      <div className="menu">
        <div className="menu-top">
          <img src={closeButton} alt='x to close' onClick={() => setMenuOpen(prev => !prev)}/>
        </div>
        <div className="menu-links">
          <p>Choose A Category:</p>
          <NavLink className="menu-link" to="/category/business" aria-label="link to homepage" onClick={() => setMenuOpen(prev => !prev)}>Business</NavLink>
          <NavLink className="menu-link" to="/category/entertainment" aria-label="link to entertainment page" onClick={() => setMenuOpen(prev => !prev)}>Entertainment</NavLink>
          <NavLink className="menu-link" to="/category/sports" aria-label="link to sports page" onClick={() => setMenuOpen(prev => !prev)}>Sports</NavLink>
          <NavLink className="menu-link" to="/category/health" aria-label="link to health page" onClick={() => setMenuOpen(prev => !prev)}>Health</NavLink>
          <NavLink className="menu-link" to="/category/technology" aria-label="link to technology page" onClick={() => setMenuOpen(prev => !prev)}>Technology</NavLink>
          <NavLink className="menu-link" to="/category/science" aria-label="link to science page" onClick={() => setMenuOpen(prev => !prev)}>Science</NavLink>
        </div>
      </div> :
      <Routes>
        <Route path="/" element={<Home articles={articles} loading={loading} err={err} setCategory={setCategory} />} />
        <Route path="/article/:id" element={<ArticleDetails articles={articles} />} />
        <Route path="/category/:category" element={<Home articles={articles} loading={loading} err={err} setCategory={setCategory} />} />
        <Route path="/category/article/:id" element={<ArticleDetails articles={articles} />} />
      </Routes>
    }

    </div>
  );
}

export default App;
