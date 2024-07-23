import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import AddTask from '../components/AddTask';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDueDate, setFilterDueDate] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setFilteredTasks(savedTasks);
  }, []);

  useEffect(() => {
    filterTasks();
  }, [tasks, searchTerm, filterPriority, filterStatus, filterDueDate]);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const filterTasks = () => {
    let tempTasks = [...tasks];

    if (searchTerm) {
      tempTasks = tempTasks.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (filterPriority) {
      tempTasks = tempTasks.filter(task => task.priority === filterPriority);
    }

    if (filterStatus) {
      tempTasks = tempTasks.filter(task => task.status === filterStatus);
    }

    if (filterDueDate) {
      tempTasks = tempTasks.filter(task => task.dueDate === filterDueDate);
    }

    setFilteredTasks(tempTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-6 dark:text-white">Todo List</h1>
        <AddTask addTask={addTask} />

        {/* Search and Filter Section */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="p-2 border border-gray-300 rounded w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={filterDueDate}
            onChange={(e) => setFilterDueDate(e.target.value)}
          />
        </div>

        <TodoList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Home;
