import React from 'react';
import { TextInput } from '../../Components/Utils/Inputs';

import LeftSideBar from '../../Components/Utils/LeftSideBar';
import { PrimaryButton } from '../../Components/Utils/Buttons';

import './style.scss';

const Profile = () => {
    return (
        <div class='height-100vh width-max flex-container'>
            <LeftSideBar />
            <div className='form-container-profile'>
                <form className='width-90'>
                    <div className="profile-input-container">
                        <label className='label-profile-input'>Nome</label>
                        <div className="input-container flex-container margin-input-label">
                            <TextInput placeholder="" />
                        </div>
                    </div>
                    <div className="profile-input-container">
                        <label className='label-profile-input'>Senha</label>
                        <div className="input-container flex-container margin-input-label">
                            <TextInput placeholder="" />
                        </div>
                    </div>
                    <div className="profile-input-container">
                        <label className='label-profile-input'>Matrícula</label>
                        <div className="input-container flex-container margin-input-label">
                            <TextInput placeholder="" />
                        </div>
                    </div>
                    <div className="profile-input-container">
                        <label className='label-profile-input'>instituição</label>
                        <div className="input-container flex-container margin-input-label">
                            <TextInput placeholder="" />
                        </div>
                    </div>

                    <div className='width-45 height-35px'>
                        <PrimaryButton title="Atualizar"></PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;