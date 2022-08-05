import { Paper } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  flex: 400px;
  height: 100%;
  overflow-y: auto;
  padding: 0.5rem;
  width: 100%;
`;

export const Item = styled(Paper)`
  margin: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  text-overflow: ellipsis;
`;
