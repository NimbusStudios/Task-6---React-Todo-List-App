import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });
  };

  return (
    <form onSubmit={handleAddTask} className="mb-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Description"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <select
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">Add Task</button>
    </form>
  );
};

export default AddTask;
