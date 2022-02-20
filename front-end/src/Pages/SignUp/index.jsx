import React from 'react';

import '../../custom.scss';
import {TextInput, PasswordInput, EmailInput, DataInput} from '../../Components/Utils/Inputs';
import {PrimaryButton, SecondaryButton} from '../../Components/Utils/Buttons';

const Login = () => {
    return(
        <div className="height-100vh width-max flex-container">
            <div className="height-max width-45 default-background">
                <h1 className="default-white-title">WorkShow</h1>
            </div>
            <div className="default-box width-55">
                <div className="form-box">
                    <div className="title-form-container margin-title-input">
                        <h1 className='default-form-title'>Cadastro</h1>
                    </div>
                    <div className="input-container margin-form-input">
                        <TextInput placeholder={'Nome'}/>
                    </div>
                    <div className="input-container margin-form-input">
                        <EmailInput placeholder={'Email'}/>
                    </div>
                    <div className="input-container margin-form-input">
                        <PasswordInput placeholder={'Senha'}/>
                    </div>
                    <div className="input-container margin-form-input">
                        <DataInput mask={''} placeholder={'Matrícula'}/>
                    </div>
                    <div className="button-form-container margin-button-container">
                        <div className="button-form-box height-60 margin-button">
                            <PrimaryButton title={'Cadastrar'}/>
                        </div>
                        <div className="button-form-box height-30 margin-button">
                            <SecondaryButton title={'Entrar'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;