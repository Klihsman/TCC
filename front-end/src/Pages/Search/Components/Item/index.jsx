import React from 'react';

const Item = () => {
    return (
        <div className='item-container flex-container'>
            <div>
                <h1 className='item-title'>Softwares Engine</h1>
                <span className='item-subtitle'>João da Silva Júnior - 2021</span>
                <p className='item-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. </p>
            </div>
            <div>
                <a href='www.google.com'>PDF</a>
            </div>
        </div>
    )
}

export default Item;