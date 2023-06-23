import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
