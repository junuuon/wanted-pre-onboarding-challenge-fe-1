import styled from 'styled-components';
import { Alert as MuiAlert, TextField as MuiTextField } from '@mui/material';
import { spacing } from '@mui/system';

export const Alert = styled(MuiAlert)(spacing);

export const TextField = styled(MuiTextField)<{ my?: number }>(spacing);
