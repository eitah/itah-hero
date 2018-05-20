import React from 'react';

export default function Header({search = {}, location}) {
    const availableSpots = search.length || 0;
    return (
        <div>
            <div>
                Chicago > {location}
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