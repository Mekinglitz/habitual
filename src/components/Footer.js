// src/components/Footer.js
import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h2>Habitual</h2>
        <p>Your one-stop shop for all gaming needs.</p>
      </div>
      <div className="columne">
        <h3>About us</h3>
        <nav>
          <a href="/">Home</a>
          <a href="/category">Team</a>
          <a href="/search">Fax</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
      <div className="popular1">
        <h3>Whats Popular</h3>
        <ul>
          <li><a href="/link1">Jean Jackets 1</a></li>
          <li><a href="/link2">Polos</a></li>
          <li><a href="/link3">T-Shirt</a></li>
          <li><a href="/link4">Ripped Jean</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>Get 5% off Your First Order</h3>
        <p>Subscribe to our newsletter and get 5% off your first purchase.</p>
        <div className='mail'>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
        <p>Terms and conditions apply.</p>
      </div>
      <div className="social-icons">
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
