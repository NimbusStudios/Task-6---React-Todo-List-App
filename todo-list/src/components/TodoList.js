import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;