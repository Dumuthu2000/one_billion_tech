import React, { useEffect, useState } from 'react';
import { X, CalendarDays, Clock } from 'lucide-react';
import { validateAddTask } from '../validations/taskValidations';

const TodoForm = ({ onClose, handleLoading, selectedTodo, handleSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: new Date().toISOString().split('T')[0],
    dueTime: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
  });
  const [errors, setErrors] = useState({});

  // Set form data when selectedTodo changes
  useEffect(() => {
    if (selectedTodo) {
      const dueDateTime = new Date(selectedTodo.dueDate);
      setFormData({
        title: selectedTodo.title || '',
        description: selectedTodo.description || '',
        dueDate: dueDateTime.toISOString().split('T')[0],
        dueTime: dueDateTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
      });
    }
  }, [selectedTodo]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateAddTask(formData);
    setErrors(validationErrors);

    // If no validation errors, submit the form data
    if (Object.keys(validationErrors).length === 0) {
      try {
        await handleSubmit(formData);
        onClose(); // Close modal after submission
      } catch (error) {
        console.error('Error adding/updating task:', error);
      }
    }
  };

  // Clear errors when form data changes
  useEffect(() => {
    setErrors({});
  }, [formData]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl font-bold">{selectedTodo ? 'Edit Task' : 'Create New Task'}</h1>
          <button
            onClick={onClose}
            className="text-grey-500 hover:text-gray-700"
          >
            <X className="h-7 w-7" />
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
              onChange={handleChange}
              value={formData.title}
              placeholder="Enter task title"
              className={`w-full px-3 py-2 ${errors.title ? 'border-red-300' : 'border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="Enter task description"
              rows="3"
              className={`w-full px-3 py-2 ${errors.title ? 'border-red-300' : 'border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
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
                id="dueDate"
                name="dueDate"
                onChange={handleChange}
                value={formData.dueDate}
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
                id="dueTime"
                name="dueTime"
                onChange={handleChange}
                value={formData.dueTime}
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
              onClick={handleSubmitForm}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {handleLoading ? 'Creating..' : selectedTodo ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;