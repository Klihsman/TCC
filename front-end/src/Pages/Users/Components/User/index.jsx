import React from 'react';
import '../../style.scss';

import { PrimaryButton } from '../../../../Components/Utils/Buttons';

const User = () => {
    return (
        <div className='user-container'>
            <div className='user-info-container'>
                <h3 className='user-name'>João da Silva</h3>
                <span className='user-job'>Professor</span>
                <span className='user-contact'>joao@ifpb.edu.br</span>
                <span className='user-contact'>999.000.888-88</span>
            </div>
            <div className='user-action-container'>
                <div className='delete-contact-button'>
                    <PrimaryButton title='Deletar'></PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default User;