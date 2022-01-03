import React from 'react';
import './inputs.scss';

const FileInput = ({placeholder})=>{
    return (
        <div>
            <label for="file">{placeholder}</label>
            <input type="file" name="file" className="input" />
        </div>
    );
}

export default FileInput;