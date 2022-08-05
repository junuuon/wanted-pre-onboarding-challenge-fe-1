import { TodoInput, Todo } from '@usertypes/todos';
import { fetchJSON } from '@utils/api-helper';

export const getTodos = (token: string) =>
  fetchJSON('GET', '/todos', token) as Promise<{ data: Todo[] }>;

export const getTodoById = (token: string, id: string) =>
  fetchJSON('GET', `/todos/${id}`, token) as Promise<{ data: Todo }>;

export const createTodo = (token: string, body: TodoInput) =>
  fetchJSON('POST', '/todos', token, body) as Promise<{ data: Todo }>;

export const updateTodo = (token: string, id: string, body: TodoInput) =>
  fetchJSON('PUT', `/todos/${id}`, token, body) as Promise<{ data: Todo }>;

export const deleteTodo = (token: string, id: string) =>
  fetchJSON('DELETE', `/todos/${id}`, token) as Promise<{ data: null }>;
