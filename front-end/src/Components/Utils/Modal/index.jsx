import React, { useState } from 'react';
import './styles.scss'


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => { setIsOpen(true) }} className="modal-page" style={{ display: isOpen ? 'none' : 'flex' }}>
            <div className="modal-container">
                <button>clique aqui</button>
            </div>
        </div>
    )
}

export default Modal;