import React from 'react';
import "../styles/Card.css";
const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      <img className="img-card"src={image} alt={title} />
      <h3 className='title-card'>{title}</h3>
      <p className='content-card'>{content}</p>
      <button className='btn-card'>Comprar</button>
    </div>
  );
};

export default Card;