import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@components/organisms/Navbar';
import AuthGuard from '@components/templates/AuthGuard';

import { AppContent } from './TodoLayout.style';

const TodoLayout: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <AuthGuard>
    <AppContent>
      <Navbar />
      {children}
      <Outlet />
    </AppContent>
  </AuthGuard>
);

export default TodoLayout;
