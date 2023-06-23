import React, { HTMLProps } from 'react';
import { DefaultTheme, css, styled, useTheme } from 'styled-components';

const selectedCSS = (theme: DefaultTheme) => {
  return css`
    cursor: pointer;
    background-color: ${theme.colors['blue-200']};
    color: ${theme.colors.white};
    border-color: transparent;
    transition: background 0.2s linear;
    &:hover {
      background-color: ${theme.colors['blue-100']};
    }
  `;
};

interface Button extends HTMLProps<HTMLButtonElement> {
  selected?: boolean;
}
export const Button = styled.button<Button>`
  padding: 5px 24px;
  background: transparent;
  border-radius: 999px;
  font-weight: 500;

  ${({ selected, theme }) => css`
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.text};
  `}
  ${({ selected, theme }) =>
    !selected &&
    css`
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors['blue-200']};
        border-color: ${({ theme }) => theme.colors['blue-200']};
      }
    `}

  ${({ selected, theme }) => selected && selectedCSS(theme)}
`;
