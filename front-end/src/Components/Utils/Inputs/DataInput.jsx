import React from 'react';
import InputMask from 'react-input-mask';
import './inputs.scss';

const DataInput = ({placeholder, mask})=>{
    return <InputMask mask={mask} placeholder={`${placeholder}`} type="text" className="input" />
}

export default DataInput;