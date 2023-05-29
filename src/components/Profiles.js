import React from 'react';
import './Profiles.css';

function Profiles() {
    return (
        <div id = "profile">
            {Item()}
        </div>
    )

}

export default Profiles;

function Item() {
    
    return (
        <div className = "flex">
            <div className = "Item">
                <img src = "https://images.unsplash.com/photo-1548009813-c6442fa355dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8ZmFjZSUyMHNtaWxlfHwwfHx8fDE2MjQ5MTk4NjM&ixlib=rb-1.2.1&q=80&w=1080" alt = "" height= "100px"/>
                <div className = "info">
                    <h3 className = 'name text-dark'>Name</h3>
                    <span>Department</span>
                </div>
            </div>
            <div className = 'item'>
                <span>Score</span>
            </div>
        </div>
    )
}
