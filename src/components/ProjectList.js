import React, { useState } from 'react';
import CreateProject from '../modals/CreateProject';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import './ProjectList.css';
import { v4 } from 'uuid';

const ProjectList = () => {
  const [projectList, setProjectList] = useState({
    todo: {
      title: 'Todo',
      items: [],
    },
    'in-progress': {
      title: 'In Progress',
      items: [],
    },
    done: {
      title: 'Completed',
      items: [],
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }
    const itemCopy = { ...projectList[source.droppableId].items[source.index] };

    setProjectList((prev) => {
      prev = { ...prev };

      prev[source.droppableId].items.splice(source.index, 1);

      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);

      return prev;
    });
  };

  const saveProject = (object) => {
    setProjectList((prev) => {
      return {
        ...prev,
        todo: {
          title: 'Todo',
          items: [
            {
              id: v4(),
              name: object.Name,
              desc: object.Description,
              startDate: object.Date,
              endDate: object.EndDate,
            },
            ...prev.todo.items,
          ],
        },
      };
    });
  };

  const deleteProject = (columnId, itemId) => {
    setProjectList((prev) => {
        const updatedList = { ...prev };
        const columnItems = updatedList[columnId].items;
        const updatedItems = columnItems.filter((item) => item.id !== itemId);
        updatedList[columnId].items = updatedItems;
        return updatedList;
    });
  };

  return (
    <div className="container">
      <div className="project-list">
        <h3>Project List</h3>
        <CreateProject save={saveProject} />
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="column-container">
          {_.map(projectList, (data, key) => {
            return (
              <div key={key} className="column">
                <h3>{data.title}</h3>

                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="droppable-col"
                      >
                        {data.items.map((el, index) => {
                          return (
                            <Draggable key={el.id} index={index} draggableId={el.id}>
                              {(provided, snapshot) => {
                                console.log(snapshot);
                                return (
                                  <div
                                    className={`item ${snapshot.isDragging && 'dragging'}`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {el.name}
                                    <p className="desc">{el.desc}</p>
                                    <p className="date">
                                      Start-Date: {el.startDate} <br /> End-Date: {el.endDate}
                                    </p>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteProject(key, el.id)}
                                    >
                                        Delete
                                    </button>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default ProjectList;
