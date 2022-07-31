import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import GuestGuard from '@components/templates/GuestGuard';

import { Wrapper, StyledPaper } from './AuthLayout.style';

const AuthLayout: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <GuestGuard>
    <Wrapper>
      <StyledPaper>
        {children}
        <Outlet />
      </StyledPaper>
    </Wrapper>
  </GuestGuard>
);

export default AuthLayout;
