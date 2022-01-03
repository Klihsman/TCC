import React from 'react';
import './inputs.scss';

const TextInput = ({placeholder})=>{
    return <input placeholder={`${placeholder}`} type="email" className="input" />
}

export default TextInput;