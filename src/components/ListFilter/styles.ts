import styled, { css } from 'styled-components';

const DESKTOP_BREAKPOINT = '1125px';

export const Container = styled.div.attrs({ className: 'list-filter' })`
  display: flex;
  align-items: center;

  .list-filter {
    &__buttons {
      white-space: nowrap;
      text-decoration: none;

      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    &__orderBy {
      white-space: nowrap;
    }
  }
`;

const filterContainerMediaQuery = css`
  @media screen and (max-width: ${DESKTOP_BREAKPOINT}) {
    flex-wrap: wrap;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 5px;
  max-width: 100%;
  overflow: hidden;
  ${filterContainerMediaQuery}
`;

const filterButtonsContainerMediaQuery = css`
  @media screen and (max-width: 760px) {
    overflow-x: scroll;
  }
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.colors.shadow};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors['blue-200']};

    border-radius: 999px;
  }

  ${filterButtonsContainerMediaQuery}
`;

export const OrderByContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (max-width: ${DESKTOP_BREAKPOINT}) {
    margin: initial;
  }
`;
export const Select = styled.select`
  padding: 5px 0 5px 8px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.colors.text};
`;
