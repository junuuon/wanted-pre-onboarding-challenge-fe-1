import styled from 'styled-components';
import { AppBar as MuiAppBar, Toolbar as MuiToolBar } from '@mui/material';

export const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.palette.background.headbar};
  color: ${(props) => props.theme.palette.text.headbar};
`;

export const ToolBar = styled(MuiToolBar)`
  display: flex;
  justify-content: flex-end;
  padding-left: 0;
`;
