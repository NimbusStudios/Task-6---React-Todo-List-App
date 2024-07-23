import React from 'react';
import { motion } from 'framer-motion';

const priorityClasses = {
  High: 'bg-red-500 text-white dark:bg-red-700',
  Medium: 'bg-yellow-500 text-white dark:bg-yellow-700',
  Low: 'bg-green-500 text-white dark:bg-green-700'
};

const TodoItem = ({ task, updateTaskStatus, deleteTask, startEdit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
      className={`p-4 rounded mb-4 flex justify-between items-center ${priorityClasses[task.priority]}`}
    >
      <div>
        <h3 className="text-xl font-semibold">{task.name}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => deleteTask(task.id)} className="bg-red-700 text-white p-2 rounded">Delete</button>
        <button
          onClick={() => updateTaskStatus(task.id)}
          className={`p-2 rounded ${task.status === 'Incomplete' ? 'bg-blue-700' : 'bg-gray-700'} text-white`}
        >
          {task.status === 'Incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'}
        </button>
        <button onClick={() => startEdit(task)} className="bg-yellow-500 text-white p-2 rounded">Edit</button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
