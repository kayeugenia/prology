import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  return (
    <ProjectContext.Provider value={{ completedTasksCount, setCompletedTasksCount }}>
      {children}
    </ProjectContext.Provider>
  );
};
