import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  #root {
		height: 100%;
		padding: 0;
 		margin: 0;
		box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.palette.background.default};
		color: ${({ theme }) => theme.palette.text.primary};
		font-size: ${({ theme }) => theme.typography.fontSize};
    line-height: 1.8rem;
    -webkit-text-size-adjust: none;
    ${media.tablet}{
      font-size:  ${({ theme }) => theme.typography.body2.fontSize};
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
	}
  #__next {
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
	* {
 		box-sizing: border-box;
 	}
  
  .pc-tablet-only {
    display: block;
    ${media.mobile} {
        display: none;
    }
  }
  .tablet-mobile-only{
    display: none;
    ${media.tablet}{
        display:block;
    }
  }
  .mobile-only {
    display: none;
    ${media.mobile} {
        display: block;
    }
  }
`;
