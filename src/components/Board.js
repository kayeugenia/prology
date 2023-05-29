import React from 'react';
import Profiles from './Profiles';
import './Board.css';

export default function Board() {
    const handleClick = (event) => {
        console.log(event.target);
    }
    return (
        <div className='board'>
            <h1 className = 'leaderboard'>Leaderboard</h1>
            <div className= 'duration'>
                <button onClick = {handleClick} data-id = '7'>7 days</button>
                <button onClick = {handleClick} data-id = '30'>30 days</button>
                <button onClick = {handleClick} data-id = '0'>All-Time</button>
            </div>
            <Profiles></Profiles>
        </div>
    )
}