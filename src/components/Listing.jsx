import React from 'react';
import './Listing.css';

export default function Listing({spot, index, toggleModal}) {
    return (
        <div className="Listing" key={spot.title}>
            <img className="listing-image" src={spot.image_url}/>
            <div className="listing-title">{spot.title}</div>
            <div className="listing-distance">{spot.distance}</div>
            <div data-index={index} className="listing-details" onClick={toggleModal}>Details</div>
        </div>
    )
}