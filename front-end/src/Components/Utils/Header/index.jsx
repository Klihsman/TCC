import React from 'react';
import { FaUser } from 'react-icons/fa';

import {useNavigate} from 'react-router-dom';

import './headers.scss';

const NormalHeader = ()=> {
    const navigate = useNavigate();

    function goToLoginPage(){
        navigate('/login')
    }

    return(
        <div className='header-full-width normal-header-height default-normal-header flex-container'>
            <div className='profile-container'>
                <div onClick={()=> goToLoginPage()} className='action-with-icon'>
                    <FaUser/>
                    <span>Login</span>
                </div>
            </div>
            <div className='normal-header-input-container'></div>
            <div className='system-title-container'></div>
        </div>
    )
}

export {NormalHeader};