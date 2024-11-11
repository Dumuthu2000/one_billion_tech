import React, { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import Modal from '../components/Model';
import { Plus, Filter } from 'lucide-react';
import useTodo from '../hooks/useTodo';

const Dashboard = () => {
  const { loading, error, fetchTodoList, addTodo, todoList } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Fetching created todo by logged-user
  useEffect(() => {
    fetchTodoList();
  }, []);

  // Modal opening
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo); // Set the current task to be edited
    setIsModalOpen(true); // Open the modal for editing
  };

  const handleSubmitForm = async (formData) => {
    await addTodo(formData);
    handleCloseModal();
    await fetchTodoList(); // Fetch the updated todo list
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 relative">
      <div className="mt-10 mx-auto max-w-[60rem] bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="font-bold text-3xl text-gray-800">To-Do List</h1>
          <div className="flex items-center gap-3">
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </div>
        {/*Horizontal line*/}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-semibold capitalize text-xl">Today tasks</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        {/* Todo Items created Today */}
        <div className="mt-6 space-y-4">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">Error: {error}</div>
          ) : (
            todoList.map((task) => <TodoItem key={task.taskId} todo={task} onEdit={handleEdit}/>)
          )}
        </div>

        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <TodoForm
              onClose={handleCloseModal}
              handleSubmit={handleSubmitForm}
              handleLoading={loading}
              selectedTodo={currentTodo} // Pass the current todo data for editing
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Dashboard;