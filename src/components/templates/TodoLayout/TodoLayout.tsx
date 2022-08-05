import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import TodoList from '@components/molecules/TodoList';
import Navbar from '@components/organisms/Navbar';
import AuthGuard from '@components/templates/AuthGuard';

import { AppContent, Content, Wrapper, TodoWrapper } from './TodoLayout.style';
import useTodo from '@hooks/useTodos';

const TodoLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const { todos } = useTodo();

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
