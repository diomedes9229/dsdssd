import { Task, TaskStatus, TaskPriority } from '../types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Project Proposal',
    description: 'Draft and finalize the Q2 project proposal document',
    status: TaskStatus.IN_PROGRESS,
    priority: TaskPriority.HIGH,
    dueDate: '2024-03-25',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Review Code Changes',
    description: 'Review pending pull requests for the main feature branch',
    status: TaskStatus.TODO,
    priority: TaskPriority.MEDIUM,
    dueDate: '2024-03-20',
    createdAt: '2024-03-15T11:00:00Z',
    updatedAt: '2024-03-15T11:00:00Z'
  },
  {
    id: '3',
    title: 'Update Documentation',
    description: 'Update API documentation with new endpoints',
    status: TaskStatus.COMPLETED,
    priority: TaskPriority.LOW,
    dueDate: '2024-03-18',
    createdAt: '2024-03-15T12:00:00Z',
    updatedAt: '2024-03-15T12:00:00Z'
  }
];