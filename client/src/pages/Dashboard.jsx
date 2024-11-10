import React from 'react';
import TodoItem from '../components/TodoItem';
import { Plus, Filter } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Todo Items Section */}
        <div className="mt-6 space-y-4">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>

        {/* Empty State */}
        {false && (
          <div className="mt-6 text-center py-12">
            <p className="text-gray-500">No tasks found. Create your first task!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;