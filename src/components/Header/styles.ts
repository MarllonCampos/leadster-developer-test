import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 44px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
