import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button">Leaderboard</button>
      <div className="sidebar-dropdown">
        <button className="sidebar-button">Projects</button>
        <div className="dropdown-content">
          <a href="./ProjectList">Project 1</a>
          <a href="./ProjectList">Project 2</a>
          <a href="./ProjectList">Project 3</a>
          <a href="./ProjectList">Project 4</a>
        </div>
      </div>
      <button className="btn-add">Add Project</button>
    </div>
  );
};

export default Sidebar;
