import React, { useContext } from "react";
import Profiles from "./Profiles";
import Profiles2 from "./Profiles2";
import "./Board.css";
import { ProjectContext } from "../context/ProjectContext";

export default function Board() {
  const { completedTasksCount } = useContext(ProjectContext);

  const handleClick = (event) => {
    console.log(event.target);
  };

  const str =
    completedTasksCount === 0
      ? "You have no completed tasks yet! Jiayou!"
      : `Woohoo! you have completed ${completedTasksCount} tasks`;

  return (
    <div className="board">
        <h1 className="leaderboard">Leaderboard</h1>
        <h4 className="score">{str}</h4>
        <div className="duration">
            <button className="boardbtn" onClick={handleClick} data-id="7">
            7 days
            </button>
            <button className="boardbtn" onClick={handleClick} data-id="30">
            30 days
            </button>
            <button className="boardbtn" onClick={handleClick} data-id="0">
            All-Time
            </button>
        </div>
        <div className="profile">
            <Profiles ></Profiles>
        </div>
        <div className="profile">
            <Profiles2 ></Profiles2>
        </div>
        <button className="view">View more</button>
        <h5 className="rewards">Rewards available</h5>
        <div className="content">
            <div class = "box">
                <img src= "https://media.cntraveler.com/photos/5991d94d2761d54e0354ca3c/16:9/w_3776,h_2124,c_limit/Optimal-Vacation_GettyImages-824071670.jpg" alt="" className="image" />
            </div>
            <div class = "box">
                <img src= "https://wealthofgeeks.com/wp-content/uploads/2021/08/free_gift_cards_MSN.png" alt="" className="image" />
            </div>
            <div class = "box">
                <img src= "https://mc-6411c2dd-ed8a-41b8-8a34-7690-cdn-endpoint.azureedge.net/mhb-media/regions/asia/siingapore/orchardhotelsingapore/dining/images/orchard_hotel_singapore_the_orchard_cafe_buffet_1280x688-min.jpg?rev=35fd50eed8324fc1a21f9421ddef63ff" alt="" className="image" />
            </div>
        </div>
    </div>
  );
}
