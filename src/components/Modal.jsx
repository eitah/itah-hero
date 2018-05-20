import React from 'react';
import './Modal.css';

export default function Modal({isOpen, details = {}, toggleModal}) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span>SPOT DETAILS</span>
                    <span className="close" onClick={toggleModal}>x</span>
                </div>
                <h3>{details.title}</h3>
                <div className="modal-body">{details.description}</div>
            </div>
        </div>
    )
}

