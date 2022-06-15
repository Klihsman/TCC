import React from 'react';
import { MdAdd } from 'react-icons/md';

import '../../style.scss';

const Work = () => {
    return (
        <div className='work-container'>
            <h3 className='title-work'>Software Engine</h3>
            <p className='description-work'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='actions-work-container'>
                <a href="" className='action-default-work'>Editar</a>
                <a href='' className='action-delete-default-work'>Excluir</a>
            </div>
        </div>
    )
}

const DefaultAddWork = () => {
    return (
        <div className='work-container'>
            <div className='add-work-icon'>
                <MdAdd />
            </div>
            <div className='link-work-container'>
                <a href="" className='action-default-work'>Adicionar artigo</a>
            </div>
        </div>
    )
}

export { Work, DefaultAddWork };