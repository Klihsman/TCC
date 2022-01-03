/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './buttons.scss'

const SecondaryButton = ({title, changeColor})=>{
    return <a href="www.google.com" className={`button secondary-button-${changeColor ? 'white': 'black'}`}>{title}</a>
}

export default SecondaryButton;