import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TodoItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
};

export default TodoList;
