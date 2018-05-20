import React from 'react';


export default function Modal({isOpen, details = {}, toggleModal}) {
    if (!isOpen) {
        return null;
    }
    return (
        <div>
            <div>
                <span>SPOT DETAILS</span>
                <span onClick={toggleModal}>X</span>
            </div>
            <h3>{details.title}</h3>
            <div>{details.description}</div>
        </div>
    )
}

