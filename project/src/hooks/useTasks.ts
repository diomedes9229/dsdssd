import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Task } from '../types/task';
import { mockApi } from '../lib/mockApi';

interface ApiError {
  message: string;
  status?: number;
}

export function useTasks() {
  const queryClient = useQueryClient();

  const { data: tasks, isLoading, error } = useQuery<Task[], ApiError>({
    queryKey: ['tasks'],
    queryFn: () => mockApi.getTasks(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
  });

  const createTask = useMutation<Task, ApiError, Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>({
    mutationFn: (newTask) => mockApi.createTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  const updateTask = useMutation<Task, ApiError, Partial<Task> & { id: string }>({
    mutationFn: ({ id, ...updates }) => mockApi.updateTask(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  const deleteTask = useMutation<void, ApiError, string>({
    mutationFn: (taskId) => mockApi.deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  return {
    tasks,
    isLoading,
    error,
    createTask,
    updateTask,
    deleteTask,
  };
}