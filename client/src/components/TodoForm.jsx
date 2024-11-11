import React, { createContext, useState } from 'react';
import { X, CalendarDays, Clock } from 'lucide-react';

const ModelContext = createContext();

const TodoForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0], // Today's date as default
    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }), // Current time as default
  });
  return (  
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/*Header*/}
        <div className='flex justify-between items-center p-2'>
          <h1 className='text-2xl font-bold'>Create New Task</h1>
          <button 
            onClick={onClose} 
            className=" text-grey-500 hover:text-gray-700"
          >
            <X className="h-7 w-7"/>
          </button>
        </div>
        {/* Form */}
        <form className="p-4">
          {/* Title Input */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              placeholder="Enter task title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              placeholder="Enter task description"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Date and Time Inputs */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Date Picker */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Date
                </div>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Time Picker */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Time
                </div>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;