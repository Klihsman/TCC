import React from "react";
import { HiUserCircle } from 'react-icons/hi';
import { MdSchool } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import './style.scss';

const LeftSideBar = () => {
    return (
        <div className="left-side-bar-container">
            <h1 className="default-white-title">WorkShow</h1>
            <div className="menu-left-side-bar">
                <a className="option-menu-left-side-bard"><HiUserCircle />Meu perfil</a>
                <a className="option-menu-left-side-bard"><MdSchool />Trabalhos</a>
                {/* Super case */}
                <a className="option-menu-left-side-bard" style={{width: '57%'}}><AiOutlinePlusCircle />Usuários Cadastrados</a>
            </div>
        </div >
    )
}

export default LeftSideBar;