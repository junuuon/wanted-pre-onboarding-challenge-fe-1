import 'styled-components';
import { Theme } from '@mui/material/styles';

interface CustomTypeText {
  bold: string;
  headbar: string;
  placeholder: string;
}

interface CustomTypeBackground {
  headbar: string;
  menubar: string;
  sidebar: string;
}
interface CustomTheme {
  transparent: string;
}

declare module '@mui/material/styles' {
  export interface Theme extends CustomTheme {}
  export interface ThemeOptions extends CustomTheme {}
  export interface TypeText extends CustomTypeText {}
  export interface TypeBackground extends CustomTypeBackground {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
