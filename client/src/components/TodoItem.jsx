import React, { useState } from 'react';
import { CalendarDays, Clock, Trash2, Edit2 } from 'lucide-react';

const TodoItem = ({ todo }) => {
  const { title, description, dueDate, dueTime } = todo;
  const formattedDate = dueDate.toString().split('T')[0];
  const [isCompleted, setIsCompleted] = useState(false);

  const today = new Date();
  const currentDate = today.getFullYear() + '-' + 
                      String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                      String(today.getDate()).padStart(2, '0');

  const onEdit = () => {
    // Handle edit
  };

  const onDelete = () => {
    // Handle delete
  };

  return (
    <div className={`rounded-lg shadow-sm p-4 transition-all duration-200 ${formattedDate === currentDate ? 'bg-red-50 border-2 border-red-500' : 'bg-white border border-gray-200 hover:shadow-md'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className={`font-medium text-lg text-gray-900 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
              {title}
            </h3>
            {formattedDate === currentDate && (
              <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
                Agent
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{dueTime}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={onEdit} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors duration-200">
              <Edit2 className="h-5 w-5" />
            </button>
            <button onClick={onDelete} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-200">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;