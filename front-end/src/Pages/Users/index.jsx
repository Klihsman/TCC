import React from 'react';
import LeftSideBar from '../../Components/Utils/LeftSideBar';
import User from './Components/User';

import './style.scss';

const Users = () => {
    return (
        <div class='height-100vh width-max flex-container align-center'>
            <LeftSideBar />
            <div className='users-container'>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    )
}

export default Users;