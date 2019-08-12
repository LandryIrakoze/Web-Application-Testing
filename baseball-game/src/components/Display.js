import React from 'react';

const Display = ({stats}) => {

    console.log(stats);

    return (
        <>
            <p>Ball:{stats.ballScore}</p>
            <p>Strikes:{stats.strikesScore}</p>
        </>
    )
}

export default Display;