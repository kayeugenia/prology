import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateProject({ save }) {
  // Handling Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handling Form Input
  const [projectName, setProjectName] = useState("");
  const [description, setTaskDesc] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const handleSave = (e) => {
    e.preventDefault();

    if (projectName.trim() === "") {
      setError(true);
      return;
    }

    const projectObject = {
      Name: projectName,
      Description: description,
      Date: date,
      EndDate: endDate
    };
    save(projectObject);
    handleClose();
    setProjectName("");
    setTaskDesc("");
    setDate("");
    setEndDate("");
    setError(false);
  };

  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave(e);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                name="taskName"
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
              {error && (
                <p className="text-danger">Please enter a project name.</p>
              )}
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Enter Project Description"
                value={description}
                onChange={(e) => setTaskDesc(e.target.value)}
                name="taskDesc"
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProject;
