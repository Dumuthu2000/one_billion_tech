import React, { useState } from 'react';
import { CalendarDays, Clock, Trash2, Edit2, CheckCircle } from 'lucide-react';

const TodoItem = ({ todo, onEdit, onDelete }) => {

  console.log({todo})
  const { taskId, title, description, dueDate, dueTime } = todo;
  const formattedDate = dueDate.toString().split('T')[0];
  const [isCompleted, setIsCompleted] = useState(false);

  const today = new Date();
  const currentDate = today.getFullYear() + '-' + 
                      String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                      String(today.getDate()).padStart(2, '0');


  const getPriorityStyles = () => {
    if (formattedDate === currentDate) {
      return 'bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-l-rose-500 hover:shadow-rose-100';
    }
    return 'bg-white hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 hover:shadow-indigo-100/50';
  };

  const handleDeleteClick = () => {
    onDelete(todo.taskId); // Pass taskId to the onDelete function
  };

  return (
    <div className={`rounded-xl shadow-sm p-6 transition-all duration-300 border border-gray-100 ${getPriorityStyles()} hover:shadow-lg`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCompleted(!isCompleted)}
              className={`p-1 rounded-full transition-colors duration-200 ${
                isCompleted 
                  ? 'text-green-600 bg-green-50 hover:bg-green-100' 
                  : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <CheckCircle className="h-5 w-5" />
            </button>
            <h3 className={`font-semibold text-lg ${
              isCompleted 
                ? 'line-through text-gray-400' 
                : 'text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text'
            }`}>
              {title}
            </h3>
            {formattedDate === currentDate && (
              <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-sm">
                Due Today
              </span>
            )}
          </div>
          <p className={`text-sm ${isCompleted ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
              <CalendarDays className="h-4 w-4 text-gray-400" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>{dueTime}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit(todo)} 
              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200 hover:shadow-sm"
            >
              <Edit2 className="h-5 w-5" />
            </button>
            <button 
              onClick={handleDeleteClick} 
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-full transition-all duration-200 hover:shadow-sm"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;