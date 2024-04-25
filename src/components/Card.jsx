import React from 'react';
import "../styles/Card.css";

const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className='card-image'/>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;