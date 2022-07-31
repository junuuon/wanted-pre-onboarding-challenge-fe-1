import { createTheme } from '@mui/material';

const FONTSIZE = 13;
const calcRem = (size: number) => `${size / FONTSIZE}rem`;

export const theme = createTheme({
  palette: {
    text: {
      bold: '#000000',
      headbar: '#f0f6fb',
      placeholder: '#999999',
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#fafafa',
      headbar: '#24292f',
      menubar: '#fafafa',
      sidebar: '#fafafa',
    },
    divider: '#f0f0f0',
  },
  typography: {
    fontSize: FONTSIZE,
    h1: {
      fontSize: calcRem(34),
    },
    h2: {
      fontSize: calcRem(20),
    },
  },
  transparent: 'rgba(255, 255, 255, 0)',
});

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
