import React from 'react';

import '../styles.scss';

const Filter = () =>{
    return(
        <div className='filter-container'>
            <div className='period-container'>
                <span className='default-primary-text'>Período</span>
                <ul className='default-list'>
                    <li className='margin-bottom-4'>2022</li>
                    <li className='margin-bottom-4'>2021</li>
                    <li className='margin-bottom-4'>2020</li>
                </ul>
                <a href='www.google.com' className='margin-bottom-4 action-period'>Definir período</a>
            </div>
            <div>
                <span className='default-primary-text'>Classificar</span>
                <ul className='default-list'>
                    <li className='margin-bottom-4'>Data</li>
                    <li className='margin-bottom-4'>Relevância</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;