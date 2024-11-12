import React, { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import Model from '../components/Model';
import useTodo from '../hooks/useTodo';
import { Plus, ChevronUp, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const {
    loading,
    error,
    fetchTodoList,
    deletTask,
    todoList = [],
    addTodo,
    updateTask,
  } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Fetching created todo by logged-user
  useEffect(() => {
    fetchTodoList();
  }, []);

  // Modal opening
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTodo(null); // Reset on modal close
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const handleDelete = async (taskId) => {
    await deletTask(taskId);
  };

  const handleSubmitForm = async (formData) => {
    if (currentTodo) {
      await updateTask(currentTodo.taskId, formData);
    } else {
      await addTodo(formData);
    }
    handleCloseModal();
    await fetchTodoList(); // Fetch the updated todo list
  };

  // Sort tasks by due date and time
  const sortedTasks = [...todoList].sort((a, b) => {
    const dateA = new Date(
      `${a.dueDate.replace('T00:00:00.000Z', '')}T${a.dueTime}`
    );
    const dateB = new Date(
      `${b.dueDate.replace('T00:00:00.000Z', '')}T${b.dueTime}`
    );

    if (sortDirection === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  // Toggle sort direction
  const handleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 relative">
      <div className="mt-10 mx-auto max-w-[60rem] bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="font-bold text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              To-Do List
            </h1>
            <p className="text-gray-500 text-sm">
              Manage your tasks efficiently
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={handleSortDirection}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-gray-200"
              >
                Sort by Due Date{' '}
                {sortDirection === 'asc' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-semibold capitalize text-xl">
            Available tasks
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Todo Items */}
        <div className="mt-6 space-y-4">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center text-xl font-bold text-red-500">
              {error}
            </div>
          ) : (
            sortedTasks.map((task) => (
              <TodoItem
                key={task.taskId}
                todo={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {isModalOpen && (
          <Model onClose={handleCloseModal}>
            <TodoForm
              onClose={handleCloseModal}
              handleSubmit={handleSubmitForm}
              handleLoading={loading}
              selectedTodo={currentTodo} // Pass the current todo data for editing
            />
          </Model>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
