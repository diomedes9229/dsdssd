import { Task } from '../types/task';
import { mockTasks } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class MockApi {
  private tasks: Task[] = [...mockTasks];

  async getTasks(): Promise<Task[]> {
    await delay(500);
    return [...this.tasks];
  }

  async createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    await delay(500);
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  async updateTask(taskId: string, updates: Partial<Task>): Promise<Task> {
    await delay(500);
    const taskIndex = this.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    
    const updatedTask: Task = {
      ...this.tasks[taskIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  async deleteTask(taskId: string): Promise<void> {
    await delay(500);
    const taskIndex = this.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    this.tasks.splice(taskIndex, 1);
  }
}

export const mockApi = new MockApi();