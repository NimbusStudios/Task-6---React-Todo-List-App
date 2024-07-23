// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';

// Defining the Home component
const Home = () => {
  // Initializing state variables
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [filteredTasks, setFilteredTasks] = useState([]); // Array to store filtered tasks
  const [searchTerm, setSearchTerm] = useState(''); // String to store search term
  const [filterPriority, setFilterPriority] = useState(''); // String to store task priority filter
  const [filterStatus, setFilterStatus] = useState(''); // String to store task status filter
  const [filterDueDate, setFilterDueDate] = useState(''); // String to store task due date filter
  const [editTask, setEditTask] = useState(null); // Object to store task being edited

  // Use effect to load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setFilteredTasks(savedTasks);
  }, []);

  // Use effect to filter tasks based on search, priority, status, and due date on changes
  useEffect(() => {
    filterTasks();
  }, [tasks, searchTerm, filterPriority, filterStatus, filterDueDate]);

  // Function to add a new task to the tasks array
  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  // Function to update a task in the tasks array
  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setEditTask(null);
  };

  // Function to delete a task from the tasks array
  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  // Function to update the status of a task in the tasks array
  const updateTaskStatus = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.status = task.status === 'Incomplete' ? 'Complete' : 'Incomplete';
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  // Function to start editing a task
  const startEdit = (task) => {
    setEditTask(task);
  };

  // Function to cancel editing a task
  const cancelEdit = () => {
    setEditTask(null);
  };

  // Function to filter tasks based on search, priority, status, and due date
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

  // Returning the JSX for the Home component
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-6 dark:text-white">Todo List</h1>

        {/* Adding a new task */}
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

        {/* Displaying the filtered tasks */}
        <TodoList
          tasks={filteredTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          startEdit={startEdit}
        />

        {/* Displaying the task being edited */}
        {editTask && (
          <EditTask
            task={editTask}
            updateTask={updateTask}
            cancelEdit={cancelEdit}
          />
        )}
      </div>
    </div>
  );
};

// Exporting the Home component
export default Home;

