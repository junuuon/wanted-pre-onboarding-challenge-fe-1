import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import useAuth from '@hooks/useAuth';
import { Todo, TodoInput, TodoResponse, TodosResponse } from '@usertypes/todos';
import { fetchJSON } from '@utils/api-helper';

export interface TodoContextType {
  todos: Todo[];
  getTodoById: (id: string) => Promise<{
    data: Todo;
  }>;
  createTodo: (body: TodoInput) => Promise<{
    data: Todo;
  }>;
  updateTodo: (
    id: string,
    body: TodoInput,
  ) => Promise<{
    data: Todo;
  }>;
  deleteTodo: (id: string) => Promise<void>;
}

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = useCallback(async () => {
    try {
      const response = (await fetchJSON(
        'GET',
        '/todos',
        token,
      )) as TodosResponse;
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchTodos();
    }
  }, [fetchTodos, token]);

  const getTodoById = (id: string) =>
    fetchJSON('GET', `/todos/${id}`, token) as Promise<TodoResponse>;

  const createTodo = (body: TodoInput) =>
    fetchJSON('POST', '/todos', token, body).then((response: TodoResponse) => {
      fetchTodos();
      return response;
    });

  const updateTodo = (id: string, body: TodoInput) =>
    fetchJSON('PUT', `/todos/${id}`, token, body).then(
      (response: TodoResponse) => {
        fetchTodos();
        return response;
      },
    );

  const deleteTodo = (id: string) =>
    fetchJSON('DELETE', `/todos/${id}`, token).then(() => {
      fetchTodos();
    });

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodoById,
        createTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
