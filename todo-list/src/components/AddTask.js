import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });
  };

  return (
    <form onSubmit={handleAddTask}>
      <input type="text" placeholder="Task Name" onChange={(e) => setTask({ ...task, name: e.target.value })} />
      <input type="text" placeholder="Task Description" onChange={(e) => setTask({ ...task, description: e.target.value })} />
      <select onChange={(e) => setTask({ ...task, priority: e.target.value })}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="date" onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;