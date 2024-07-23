// This is the AddTask component, which is responsible for adding new tasks to the app.

// Import necessary libraries
import React, { useState } from 'react';

// Define the AddTask function, which is a functional component
const AddTask = ({ addTask }) => {
  // Initialize state for task
  const [task, setTask] = useState({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });

  // Define the handleAddTask function, which is triggered when the form is submitted
  const handleAddTask = (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Add new task to the app by calling the addTask function passed as a prop,
    // and also generate a unique ID for the task using Date.now()
    addTask({ ...task, id: Date.now() });

    // Reset the task form
    setTask({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });
  };

  // Render the form
  return (
    <form onSubmit={handleAddTask} className="mb-4">
      {/* Input field for task name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      {/* Input field for task description */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Description"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      {/* Select field for task priority */}
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
      {/* Input field for task due date */}
      <div className="mb-4">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
      </div>
      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">Add Task</button>
    </form>
  );
};

// Export the AddTask component
export default AddTask;

