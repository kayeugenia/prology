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
                <img src = "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d3e7ff397743ca33ac0d1_Screenshot%202023-03-23%20at%205.32.55%20PM.png" alt = "" height= "80px"/>
                <div className = "info">
                    <h3 className = 'name text-dark'>IT Department</h3>
                </div>
            </div>
            <div className = 'item'>
                <span>80 tasks</span>
            </div>
        </div>
    )
}
