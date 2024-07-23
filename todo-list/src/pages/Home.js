// This is the Home component for the todo list app. It displays a list of tasks and allows the user to add, update, and delete tasks.
// It also includes a search and filter feature to help the user find specific tasks.

import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList'; // Import the TodoList component to display the tasks
import AddTask from '../components/AddTask'; // Import the AddTask component to allow the user to add tasks

const Home = () => {
  // Define the state variables for the component
  const [tasks, setTasks] = useState([]); // tasks is an array of task objects
  const [filteredTasks, setFilteredTasks] = useState([]); // filteredTasks is an array of task objects that are filtered based on the search and filter criteria
  const [searchTerm, setSearchTerm] = useState(''); // searchTerm is a string used to filter the tasks by name
  const [filterPriority, setFilterPriority] = useState(''); // filterPriority is a string used to filter the tasks by priority
  const [filterStatus, setFilterStatus] = useState(''); // filterStatus is a string used to filter the tasks by status
  const [filterDueDate, setFilterDueDate] = useState(''); // filterDueDate is a string used to filter the tasks by due date

  // Use the useEffect hook to load the tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get the tasks from localStorage and parse them as JSON
    setTasks(savedTasks); // Set the tasks state variable to the loaded tasks
    setFilteredTasks(savedTasks); // Set the filteredTasks state variable to the loaded tasks
  }, []);

  // Use the useEffect hook to filter the tasks whenever the searchTerm, filterPriority, filterStatus, or filterDueDate state variables change
  useEffect(() => {
    filterTasks(); // Call the filterTasks function to filter the tasks based on the search and filter criteria
  }, [tasks, searchTerm, filterPriority, filterStatus, filterDueDate]);

  // Define the addTask function to add a new task to the tasks state variable and save it to localStorage
  const addTask = (task) => {
    const newTasks = [...tasks, task]; // Create a new array with the current tasks and the new task
    setTasks(newTasks); // Set the tasks state variable to the new array
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Save the new array to localStorage as JSON
  };

  // Define the updateTask function to update a task in the tasks state variable and save it to localStorage
  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)); // Create a new array with the updated task and the rest of the tasks
    setTasks(newTasks); // Set the tasks state variable to the new array
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Save the new array to localStorage as JSON
  };

  // Define the deleteTask function to delete a task from the tasks state variable and save it to localStorage
  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId); // Create a new array with the tasks that have a different id than the task to be deleted
    setTasks(newTasks); // Set the tasks state variable to the new array
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Save the new array to localStorage as JSON
  };

  // Define the filterTasks function to filter the tasks based on the search and filter criteria
  const filterTasks = () => {
    let tempTasks = [...tasks]; // Create a copy of the tasks array

    // If there is a search term, filter the tasks by name
    if (searchTerm) {
      tempTasks = tempTasks.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // If there is a filter priority, filter the tasks by priority
    if (filterPriority) {
      tempTasks = tempTasks.filter(task => task.priority === filterPriority);
    }

    // If there is a filter status, filter the tasks by status
    if (filterStatus) {
      tempTasks = tempTasks.filter(task => task.status === filterStatus);
    }

    // If there is a filter due date, filter the tasks by due date
    if (filterDueDate) {
      tempTasks = tempTasks.filter(task => task.dueDate === filterDueDate);
    }

    setFilteredTasks(tempTasks); // Set the filteredTasks state variable to the filtered tasks
  };

  // Render the Home component
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-6 dark:text-white">Todo List</h1>

        {/* Render the AddTask component to allow the user to add tasks */}
        <AddTask addTask={addTask} />

        {/* Render the search and filter section */}
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

        {/* Render the TodoList component to display the filtered tasks */}
        <TodoList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Home;

