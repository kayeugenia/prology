import React, { useState, useContext } from 'react';
import CreateTask from '../modals/CreateTask';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import './ProjectList.css';
import { v4 } from 'uuid';
import { ProjectContext } from '../context/ProjectContext';

const ProjectList = () => {
    const { setCompletedTasksCount } = useContext(ProjectContext);

    const [projectList, setProjectList] = useState({
        todo: {
        title: 'To do',
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
        
        if (destination.droppableId === 'Completed') {
            setCompletedTasksCount((prevCount) => prevCount + 1);
        } else if (source.droppableId === 'Completed') {
            setCompletedTasksCount((prevCount) => prevCount - 1);
        }
        return prev;
        });
    };

    const saveProject = (object) => {
        setProjectList((prev) => {
        return {
            ...prev,
            todo: {
            title: 'To do',
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

            if (columnId === 'Completed') {
                setCompletedTasksCount((prevCount) => prevCount - 1);
            }

            return updatedList;
        });
    };

    return (
        <div className="container">
            <div className="project-list">
                <h2>Project Task List</h2>
                <CreateTask save={saveProject} />
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="column-container">
                {_.map(projectList, (data, key) => {
                    const count = data.items.length;
                    const str = count <= 1 ? `${count} task` : `${count} tasks`;
                    return (
                    <div key={key} className="column">
                        <h3>{data.title}</h3>
                        <h6>{str}</h6>
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
