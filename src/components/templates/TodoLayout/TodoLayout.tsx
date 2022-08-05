import { ReactNode, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { getTodos } from '@api/todos';
import TodoList from '@components/molecules/TodoList';
import Navbar from '@components/organisms/Navbar';
import AuthGuard from '@components/templates/AuthGuard';
import useAuth from '@hooks/useAuth';
import { Todo as TodoType } from '@usertypes/todos';

import { AppContent, Content, Wrapper, TodoWrapper } from './TodoLayout.style';

const TodoLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>();
  const { token } = useAuth();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(token);
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, [token]);

  return (
    <AuthGuard>
      <AppContent>
        <Navbar />
        <Content>
          {todos && (
            <Wrapper>
              <TodoList todos={todos} />
              <TodoWrapper>
                {children}
                <Outlet />
              </TodoWrapper>
            </Wrapper>
          )}
        </Content>
      </AppContent>
    </AuthGuard>
  );
};

export default TodoLayout;
