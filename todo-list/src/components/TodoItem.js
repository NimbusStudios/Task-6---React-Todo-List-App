import React from 'react';

const TodoItem = ({ task, updateTask, deleteTask }) => {
  return (
    <div className="bg-gray-100 p-4 rounded mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{task.name}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
        <button
          onClick={() => updateTask({ ...task, status: task.status === 'Incomplete' ? 'Complete' : 'Incomplete' })}
          className={`p-2 rounded ${task.status === 'Incomplete' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
        >
          {task.status === 'Incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
