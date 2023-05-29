import React, { useState } from 'react';
import './Sidebar.css';
import AddProject from '../modals/AddProject';

const Sidebar = () => {
  const [projectList, setProjectList] = useState({
    projects: {
      title: 'Projects',
      items: [],
    },
  });

    const saveProject = (object) => {
        setProjectList((prev) => {
        return {
            ...prev,
            projects: {
            ...prev.projects,
            items: [
                ...prev.projects.items,
                {
                name: object.Name,
                startDate: object.Date,
                endDate: object.EndDate,
                },
            ],
            },
        };
        });
    };

    return (
        <div className="sidebar">
        <button className="sidebar-button">Leaderboard</button>
        <div className="sidebar-dropdown">
            <button className="sidebar-button">Projects</button>
            <div className="dropdown-content">
            {projectList.projects.items.map((project, index) => (
                <a href="./ProjectList" key={index}>
                {project.name}
                </a>
            ))}
            </div>
        </div>
        <AddProject className="btn-add" save={saveProject} />
        </div>
    );
};

export default Sidebar;
