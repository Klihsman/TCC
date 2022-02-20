import React from 'react';
import './inputs.scss';
import InputMask from 'react-input-mask';

const DataInput = ({placeholder, mask})=>{
    return <InputMask mask={mask} placeholder={`${placeholder}`} type="text" className="input" />
}

const TextInput = ({placeholder})=>{
    return <input placeholder={`${placeholder}`} type="email" className="input" />
}

const PasswordInput = ({placeholder})=>{
    return <input placeholder={`${placeholder}`} type="password" className="input" />
}

const FileInput = ({placeholder})=>{
    <div>
        <label for="file">{placeholder}</label>
        <input type="file" name="file" className="input" />
    </div>
}

const EmailInput = ({placeholder})=>{
    return <input placeholder={`${placeholder}`} type="email" className="input" />
}

export {FileInput, TextInput, PasswordInput, DataInput, EmailInput};