import styled from 'styled-components';

export const Wrapper = styled.div`
  .Mui-disabled {
    -webkit-text-fill-color: ${({ theme }) =>
      theme.palette.text.primary} !important;
    color: ${({ theme }) => theme.palette.text.primary}!important;
  }

  display: flex;
  flex-direction: column;
`;
