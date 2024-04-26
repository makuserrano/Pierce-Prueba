import React from 'react';
import "../styles/Card.css";
const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      <img className="img-card"src={image} alt={title} />
      <h3 className='title-card'>{title}</h3>
      <p className='content-card'>{content}</p>
      <a className='btn-card'>Comprar</a>
    </div>
  );
};

export default Card;