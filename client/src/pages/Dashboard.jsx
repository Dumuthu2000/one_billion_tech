import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import { Plus, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import Modal from '../components/Model';


const Dashboard = () => {
  const[isModalOpen, setIsModelOpen] = useState(false);

  const handleOpenModel=()=>{
    setIsModelOpen(true);
  }

  const handleCloseModel=()=>{
    setIsModelOpen(false);
  }

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
              onClick={handleOpenModel} 
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
        {/* Todo Items  created By tody*/}
        <div className="mt-6 space-y-4">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        {/*Horizontal line*/}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-semibold capitalize text-xl">Recent task</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        {/* Todo Items  created By tody*/}
        <div className="mt-6 space-y-4">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        {isModalOpen && (
          <Modal onClose={handleCloseModel}>
            <TodoForm onClose={handleCloseModel}/>
          </Modal>
        )}      
      </div>
    </div>
  );
};

export default Dashboard;