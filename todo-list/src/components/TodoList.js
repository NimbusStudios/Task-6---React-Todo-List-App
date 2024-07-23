import React from 'react';
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <motion.div layout>
      <AnimatePresence>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No tasks found.</p>
        ) : (
          tasks.map((task) => (
            <TodoItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoList;
