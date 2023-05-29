import React, { useState } from 'react';
import './Sidebar.css';
import AddProject from '../modals/AddProject';
import {Link, useNavigate} from 'react-router-dom';
import { supabase } from './LoginPage.js';

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
    const navigate = useNavigate();

    const handleLogOutClick = async () => {
        await supabase.auth.signOut();
        navigate('/LoginPage'); // Redirect to the login page
    };

    return (
        
        <div className="sidebar">
            <Link to="/Board">
                <button className="sidebar-button">Leaderboard</button>
            </Link>
            <div className="sidebar-dropdown">
                <button className="sidebar-button">Projects</button>
                <div className="dropdown-content">
                <Link to="ProjectList">Project 1</Link>
                {projectList.projects.items.map((project, index) => (
                    <Link to="ProjectList">
                        {project.name}
                    </Link>
                ))}
                </div>
            </div>
        <div className = "btn-add-container">
            <AddProject className="btn-add" save={saveProject} />
        </div>
        <button className="signout" onClick={handleLogOutClick}>Sign out</button>
        </div>
    );
};

export default Sidebar;
