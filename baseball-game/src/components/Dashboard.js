import React from 'react';

const Dashboard = ({increment}) => {
    
    console.log(increment);

    return (
        <>
            <button onClick={() => increment.strike()} >strike</button>
            <button onClick={() => increment.ball()} >ball</button>
            <button onClick={() => increment.foul()} >foul</button>
            <button onClick={() => increment.hit()} >hit</button>
        </>
    )
}

export default Dashboard;