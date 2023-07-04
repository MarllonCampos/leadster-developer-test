import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s linear;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow} 0px 4px 16px, ${({ theme }) => theme.colors.shadow} 0px 8px 32px;
  }

  max-width: 370px;
`;

export const Bottom = styled.div.attrs({ className: 'bottom' })`
  padding: 16px 24px;

  .bottom {
    &__title {
      font-weight: bold;
      ${({ theme }) => theme.colors.text}
    }
  }
`;
