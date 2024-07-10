import React from 'react';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <h1> <a href="/Cart"><FaShoppingCart /></a> Habitual</h1>
        </div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/category">Shop Category</a>
        <a href="/search">Search</a>
        <a href="/Contact">Contact Us</a>
      </nav>
      <div className="auth-links">
        <a href="/signin"><FaSignInAlt /> Sign In</a>
        <a href="/register"><FaUserPlus /> Register</a>
      </div>
    </header>
  );
};

export default Header;
