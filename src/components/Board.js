import React, { useContext } from "react";
import Profiles from "./Profiles";
import "./Board.css";
import { ProjectContext } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./LoginPage.js";

export default function Board() {
  const { completedTasksCount } = useContext(ProjectContext);

  const handleClick = (event) => {
    console.log(event.target);
  };

  const str =
    completedTasksCount === 0
      ? "You have no completed tasks yet! Jiayou!"
      : `Woohoo! you have completed ${completedTasksCount} tasks`;

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="app">
      <header className="app-header">
        {Object.keys(user).length !== 0 ? (
          <>
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
          </>
        ) : (
          <>
            <button
              className="back-illegal"
              onClick={() => {
                navigate("/");
              }}
            >
              Login again!
            </button>
          </>
        )}
      </header>
    </div>
  );
}
