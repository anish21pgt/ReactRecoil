import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { taskListState } from '../state/Atoms';

function TaskForm() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useRecoilState(taskListState);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <>
      <div className='p-2'></div>
      <div className="mb-3 text-center">
        <h2>Add Task</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              value={newTask}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="New Task"
            />
          </div>
        </div>
        <div className='p-2'></div>
        <div className="row mt-2 justify-content-center">
          <div className="col-md-8">
            <button className="btn btn-primary w-20" onClick={handleAddTask}>
              Add
            </button>
            <div className='p-4'></div>
            <h3>To Do List</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;


