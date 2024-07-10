// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Trends from './components/Trends';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
