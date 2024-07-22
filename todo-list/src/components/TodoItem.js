import React from 'react';

const TodoItem = ({ task, updateTask, deleteTask }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => updateTask({ ...task, status: task.status === 'Incomplete' ? 'Complete' : 'Incomplete' })}>
        {task.status === 'Incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'}
      </button>
    </div>
  );
};

export default TodoItem;