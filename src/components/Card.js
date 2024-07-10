// src/components/Card.js
import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import './Card.css';

const Card = ({ image, title, rating, price }) => {
  return (
    <div className="card">
      <FaHeart className="favorite-icon" />
      <img src={image} alt={title} width={"180px"}/>
      <h3>{title}</h3>
      <div className="rating">
        <FaStar /> {rating}
      </div>
      <p>${price}</p>
    </div>
  );
};

export default Card;
