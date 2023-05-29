import React, { useContext } from "react";
import Profiles from "./Profiles";
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
        <button onClick={handleClick} data-id="7">
          7 days
        </button>
        <button onClick={handleClick} data-id="30">
          30 days
        </button>
        <button onClick={handleClick} data-id="0">
          All-Time
        </button>
      </div>
      <Profiles></Profiles>
    </div>
  );
}
