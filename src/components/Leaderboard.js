import React from 'react';
import Sidebar from './Sidebar';
import Board from './Board';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <Sidebar />
      <Board />
    </div>
  );
};

export default Leaderboard;
