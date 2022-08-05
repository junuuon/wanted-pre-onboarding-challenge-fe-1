import styled from 'styled-components';
import { Paper } from '@mui/material';
import { media } from '@styles/theme';

export const AppContent = styled.div`
  height: calc(100% - 64px);
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  padding: 5rem;
`;

export const Wrapper = styled(Paper)`
  display: flex;
  height: 100%;
  width: 100%;

  ${media.mobile} {
    flex-direction: column-reverse;
  }
`;

export const TodoWrapper = styled.div`
  width: 100%;
`;
