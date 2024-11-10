import React from 'react';
import { CalendarDays, Clock, Trash2, Edit2 } from 'lucide-react';

const TodoItem = ({ 
  title = "Complete React Assignment",
  description = "Implement all features including authentication and todo management",
  createdDate = "2024-11-10",
  createdTime = "14:30",
  onEdit = () => {},
  onDelete = () => {},
  isCompleted = false
}) => {
  return (
    <div className="max-w-[50rem] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-4 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        {/* Title and Description Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className={`font-medium text-lg text-gray-900 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
              {title}
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Actions Section */}
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
          {/* Date and Time */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{createdDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{createdTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onEdit}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              onClick={onDelete}
              className="p-1 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;