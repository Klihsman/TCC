import React from 'react';
import './inputs.scss';

const PasswordInput = ({placeholder})=>{
    return <input placeholder={`${placeholder}`} type="password" className="input" />
}

export default PasswordInput;