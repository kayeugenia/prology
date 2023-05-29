import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Sidebar from './components/Sidebar';
//import ProjectList from './components/ProjectList'
import { React, useState, useEffect } from 'react';
import { CssBaseline } from "@mui/material";
import { supabase } from "./components/LoginPage.js";
import Leaderboard from "./components/Leaderboard";
import LoginPage from "./components/LoginPage";

export default function App() {
    const [session, setSession] = useState(null);
  
    useEffect(() => {
      const subscription = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
      return () => subscription.data.subscription.unsubscribe();
    }, []);
  
    return (
        <div className="App">
                <CssBaseline />
                {session ? <Leaderboard /> : <LoginPage />}
        </div>
    );
}
