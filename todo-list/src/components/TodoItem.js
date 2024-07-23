// Import the React library and the motion component from the Framer Motion library
import React from 'react';
import { motion } from 'framer-motion';

// Define an object that maps priority values to CSS classes
const priorityClasses = {
  // If the priority is 'High', apply the following CSS classes
  High: 'bg-red-500 text-white dark:bg-red-700',
  // If the priority is 'Medium', apply the following CSS classes
  Medium: 'bg-yellow-500 text-white dark:bg-yellow-700',
  // If the priority is 'Low', apply the following CSS classes
  Low: 'bg-green-500 text-white dark:bg-green-700'
};

// Define a functional component called TodoItem that takes in several props
const TodoItem = ({ task, updateTaskStatus, deleteTask, startEdit }) => {
  // Render a motion.div element with the following initial, animate, and exit values
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and y-coordinate 20
      animate={{ opacity: 1, y: 0 }} // Animate opacity to 1 and y-coordinate 0
      exit={{ opacity: 0, y: 20 }} // Animate opacity to 0 and y-coordinate 20 on exit
      layout // Enable layout animation
      className={`p-4 rounded mb-4 flex justify-between items-center ${priorityClasses[task.priority]}`} // Apply the CSS class based on the task's priority
    >
      {/* Render a div that displays the task's name, description, priority, and due date */}
      <div>
        <h3 className="text-xl font-semibold">{task.name}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
      {/* Render a div that contains three buttons */}
      <div className="flex space-x-2">
        {/* Render a button that deletes the task when clicked */}
        <button onClick={() => deleteTask(task.id)} className="bg-red-700 text-white p-2 rounded">Delete</button>
        {/* Render a button that updates the task's status when clicked */}
        <button
          onClick={() => updateTaskStatus(task.id)} // Call the updateTaskStatus function with the task's id
          className={`p-2 rounded ${task.status === 'Incomplete' ? 'bg-blue-700' : 'bg-gray-700'} text-white`} // Apply the appropriate CSS class based on the task's status
        >
          {task.status === 'Incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'} 
        </button>
        {/* Render a button that starts the edit mode when clicked */}
        <button onClick={() => startEdit(task)} className="bg-yellow-500 text-white p-2 rounded">Edit</button>
      </div>
    </motion.div>
  );
};

// Export the TodoItem component as the default export
export default TodoItem;

