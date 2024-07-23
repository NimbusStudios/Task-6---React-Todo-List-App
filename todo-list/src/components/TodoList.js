// This is a functional component called TodoList that renders a list of tasks.
// It takes in four props: tasks, updateTaskStatus, deleteTask, and startEdit.
// 
// - tasks: an array of task objects to be displayed
// - updateTaskStatus: a function to update the status of a task
// - deleteTask: a function to delete a task
// - startEdit: a function to start editing a task

import React from 'react';
import TodoItem from './TodoItem'; // Importing the TodoItem component
import { AnimatePresence, motion } from 'framer-motion'; // Importing the AnimatePresence and motion components from the framer-motion library

const TodoList = ({ tasks, updateTaskStatus, deleteTask, startEdit }) => {
  return (
    // Wrapping the list of tasks in a motion.div component from framer-motion
    // This component is used to animate the layout of its children.
    <motion.div layout>
      {/* Wrapping the list of tasks in an AnimatePresence component from framer-motion */}
      {/* This component is used to animate the addition and removal of elements */}
      <AnimatePresence>
        {/* Checking if there are no tasks to be displayed */}
        {tasks.length === 0 ? (
          // If there are no tasks, display a message saying so
          <p className="text-center text-gray-500 dark:text-gray-400">No tasks found.</p>
        ) : (
          // If there are tasks, map over them and render a TodoItem component for each
          tasks.map((task) => (
            <TodoItem
              key={task.id} // Using the task id as the key for the TodoItem component
              task={task} // Passing the task object to the TodoItem component
              updateTaskStatus={updateTaskStatus} // Passing the updateTaskStatus function to the TodoItem component
              deleteTask={deleteTask} // Passing the deleteTask function to the TodoItem component
              startEdit={startEdit} // Passing the startEdit function to the TodoItem component
            />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoList;

