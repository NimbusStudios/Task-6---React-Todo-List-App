// Importing the necessary dependencies
import React, { useState } from 'react';

// Defining a functional component called AddTask
const AddTask = ({ addTask }) => {
  // Creating a state variable called task using the useState hook
  // The initial value of task is an object with properties for task name, description, priority, status, and due date
  const [task, setTask] = useState({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });

  // Defining a function called handleAddTask which will be called when the form is submitted
  const handleAddTask = (e) => {
    // Preventing the default form submit behavior
    e.preventDefault();
    // Calling the addTask function passed as a prop and passing the task object as an argument
    // The task object is created by spreading the existing task object and adding an id property with the current timestamp
    addTask({ ...task, id: Date.now() });
    // Resetting the task state back to its initial values
    setTask({ name: '', description: '', priority: 'Low', status: 'Incomplete', dueDate: '' });
  };

  // Returning the JSX for the AddTask component
  return (
    // Defining a form element with an onSubmit event handler
    <form onSubmit={handleAddTask} className="mb-4">
      {/* Defining a div element for the task name input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          // Updating the task state whenever the input value changes
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      {/* Defining a div element for the task description input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Description"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          // Updating the task state whenever the input value changes
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      {/* Defining a div element for the task priority select */}
      <div className="mb-4">
        <select
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          // Updating the task state whenever the select value changes
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      {/* Defining a div element for the task due date input */}
      <div className="mb-4">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          // Updating the task state whenever the input value changes
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
      </div>
      {/* Defining a button element for submitting the form */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">Add Task</button>
    </form>
  );
};

// Exporting the AddTask component as the default export
export default AddTask;

