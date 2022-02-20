import React from 'react';
import './buttons.scss'

const PrimaryButton = ({title})=>{
    return <button className="button primary-button">{title}</button>
}

const SecondaryButton = ({title, changeColor})=>{
    return <a href="www.google.com" className={`button-without-hover secondary-button-${changeColor ? 'white': 'black'}`}>{title}</a>
}

export {PrimaryButton, SecondaryButton}