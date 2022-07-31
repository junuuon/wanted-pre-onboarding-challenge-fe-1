import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper, StyledPaper } from './AuthLayout.style';

const AuthLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <StyledPaper>
        {children}
        <Outlet />
      </StyledPaper>
    </Wrapper>
  );
};

export default AuthLayout;
