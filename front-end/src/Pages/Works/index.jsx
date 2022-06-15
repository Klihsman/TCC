import React from 'react';
import LeftSideBar from '../../Components/Utils/LeftSideBar';
import { DefaultAddWork, Work } from './Components/Work';

import './style.scss';

const Works = () => {
    return (
        <div class='height-100vh width-max flex-container align-center'>
            <LeftSideBar />
            <div className='works-container'>
                <DefaultAddWork />
                <Work />
            </div>
        </div>
    )
}

export default Works;