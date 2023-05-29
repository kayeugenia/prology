import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { React } from "react";
import Board from "./components/Board";
import Login from "./components/LoginPage";
import ProjectList from "./components/ProjectList";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  // Check if the current location matches the login page path
  const showSidebar = location.pathname !== "/";

  return (
    <div className="App">
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/ProjectList" element={<ProjectList />} />
      </Routes>
    </div>
  );
}
