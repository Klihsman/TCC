import React from 'react';
import './items.scss';  

const Card = ({title, description, date, autor})=>{
    return(
        <div className="article-card">
            <div className="article-title-box">
                <h1>{title}</h1>
                <span className="autor">{autor}</span>
            </div>
            <div className="article-body-box">
                <span className="description">{description}</span>
                <span className="date">{date}</span>
            </div>
            <div className="article-action-container">
                <a href="www.google.com" target="_blank">Ver mais</a>
            </div>
        </div>
    )
}

export default Card;