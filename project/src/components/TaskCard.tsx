import React from 'react';
import { Task, TaskPriority } from '../types/task';
import { Clock, Flag } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const priorityColors = {
    [TaskPriority.LOW]: 'bg-blue-100 text-blue-800',
    [TaskPriority.MEDIUM]: 'bg-yellow-100 text-yellow-800',
    [TaskPriority.HIGH]: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority.toLowerCase()}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Flag className="w-4 h-4" />
          <span>{task.status}</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}