import React, { useState, useEffect } from 'react';

const EditTask = ({ task, updateTask, cancelEdit }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Edit Task</h2>
        <form onSubmit={handleUpdateTask}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task Name"
              className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={updatedTask.name}
              onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task Description"
              className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={updatedTask.description}
              onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <select
              className="p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={updatedTask.priority}
              onChange={(e) => setUpdatedTask({ ...updatedTask, priority: e.target.value })}
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
              value={updatedTask.dueDate}
              onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={cancelEdit} className="bg-red-500 text-white p-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;


