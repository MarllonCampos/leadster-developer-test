import { HTMLProps } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div.attrs({ className: 'pagination' })`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 0 0 0;

  .pagination {
    &__text {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
    }

    &__list-container {
      margin-left: 8px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

const listItemSelected = (theme: DefaultTheme) => css`
  font-weight: bold;
  color: ${theme.colors['blue-100']};
  border: 1px solid ${theme.colors['blue-100']};
`;

interface Props extends HTMLProps<HTMLLIElement> {
  selected?: boolean;
}
export const ListItem = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 35px;
  aspect-ratio: 1;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.shadow};
  }
  ${({ theme }) => theme.colors['text-50']}

  ${({ selected, theme }) => selected && listItemSelected(theme)}
`;
