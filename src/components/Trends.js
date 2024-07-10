// src/components/Trends.js
import React from 'react';
import './Trends.css';

const Trends = () => {
  return (
    <section className="trends">
      <h2>Follow the Latest Trends</h2>
      <p>Stay updated with the latest gaming trends and news.</p>
      <div className="search-bar">
        <input type="text" placeholder="you@example.com" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default Trends;
