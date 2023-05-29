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
                <img src = "https://img.freepik.com/free-vector/illustration-marketing-banner_53876-7966.jpg" alt = "" height= "80px"/>
                <div className = "info">
                    <h3 className = 'name text-dark'>Marketing Department</h3>
                </div>
            </div>
            <div className = 'item'>
                <span>70 tasks</span>
            </div>
        </div>
    )
}
