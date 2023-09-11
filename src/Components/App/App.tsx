import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Article from '../Article/Article';
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
     
  );
}

export default App;
