import React from 'react';


export default function Listing({spot, index, toggleModal}) {
    return (
        <div key={spot.title}>
            <img src={spot.image_url}/>
            <div>{spot.title}</div>
            <div>{spot.distance}</div>
            <div data-index={index} onClick={toggleModal}>Details</div>
        </div>
    )
}