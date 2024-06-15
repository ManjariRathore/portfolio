import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  image: string;
  content: string;
  link:string;

}

const Card: React.FC<CardProps> = ({ title, image, content,link }) => {
  return (
    <div className="card">
      <a href={link} target='_blank'><img src={image} alt={title} className="card-image h-[50%] w-[100%] " /></a>
      <div className="card-body p-[10%]">
        <h2 className="card-title font-bold m-3">{title}</h2>
        <p className="card-content ">{content}</p>
      </div>
    </div>
  );
};

export default Card;
