// Import the React library
import React from 'react';

// Import the TodoItem component from the './TodoItem' file
import TodoItem from './TodoItem';

// Define a functional component called TodoList
// This component takes in three props: tasks, updateTask, and deleteTask
const TodoList = ({ tasks, updateTask, deleteTask }) => {
  // The component returns a div element
  return (
    <div>
      {/* If there are no tasks, display a message saying 'No tasks found.' */
      tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        // If there are tasks, map over each task and render a TodoItem component for each one
        tasks.map((task) => (
          // Each TodoItem component is given a unique key based on the task's id
          // The task object is passed as a prop to the TodoItem component
          // The updateTask and deleteTask functions are also passed as props to the TodoItem component
          <TodoItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
};

// Export the TodoList component so it can be used in other parts of the application
export default TodoList;

