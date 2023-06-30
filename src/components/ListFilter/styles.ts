import styled, { css } from 'styled-components';

export const Container = styled.div.attrs({ className: 'list-filter' })`
  display: flex;
  align-items: center;

  .list-filter {
    &__buttons {
      white-space: nowrap;
    }

    &__orderBy {
      white-space: nowrap;
      margin-right: 14px;
    }
  }
`;

const filterContainerMediaQuery = css`
  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 760px) {
    max-width: 100vw;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 5px;

  padding: 0 10px;
  ${filterContainerMediaQuery}
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  padding: 5px;
  width: 100%;

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

  &::-webkit-scrollbar-thumb:hover {
  }
`;
