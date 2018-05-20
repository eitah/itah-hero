import React from 'react';


export default function Modal({isOpen, details}) {
    return (
        <div>
            I am a modal: {isOpen? 'true': 'false'}
            <div>I have details: {JSON.stringify(details)}</div>

        </div>
    )
}

