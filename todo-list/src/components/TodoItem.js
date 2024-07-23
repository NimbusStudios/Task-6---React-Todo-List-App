import React from 'react';

// Mapping of priority levels to their respective CSS classes for styling
const priorityClasses = {
  High: 'bg-red-500 text-white dark:bg-red-700',
  Medium: 'bg-yellow-500 text-white dark:bg-yellow-700',
  Low: 'bg-green-500 text-white dark:bg-green-700'
};

// TodoItem component that displays individual task information
const TodoItem = ({ task, updateTask, deleteTask }) => {
  return (
    <div className={`p-4 rounded mb-4 flex justify-between items-center ${priorityClasses[task.priority]}`}>
      <div>
        {/* Task Name */}
        <h3 className="text-xl font-semibold">{task.name}</h3>
        {/* Task Description */}
        <p>{task.description}</p>
        {/* Task Priority */}
        <p>Priority: {task.priority}</p>
        {/* Task Due Date */}
        <p>Due Date: {task.dueDate}</p>
      </div>
      <div className="flex space-x-2">
        {/* Delete Task Button */}
        <button onClick={() => deleteTask(task.id)} className="bg-red-700 text-white p-2 rounded">Delete</button>
        {/* Update Task Status Button */}
        <button
          onClick={() => updateTask({ ...task, status: task.status === 'Incomplete' ? 'Complete' : 'Incomplete' })}
          className={`p-2 rounded ${task.status === 'Incomplete' ? 'bg-blue-700' : 'bg-gray-700'} text-white`}
        >
          {/* Conditional Button Text based on Task Status */}
          {task.status === 'Incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

