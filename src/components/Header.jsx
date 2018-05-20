import React from 'react';
import './Header.css';

export default function Header({search = {}, location}) {
    const availableSpots = search.length || 0;
    return (
        <div className="Header">
            <div>
                <span className="Header-breadcrumb">Chicago</span> > {location}
            </div>
            <h2>
                {location}
            </h2>
            <div>
                {availableSpots} Spots Available
            </div>
        </div>
    );
}