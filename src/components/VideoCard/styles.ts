import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s linear;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow} 0px 4px 16px, ${({ theme }) => theme.colors.shadow} 0px 8px 32px;
  }

  max-width: 370px;
  height: 292px;
`;

export const Bottom = styled.div.attrs({ className: 'bottom' })`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  flex: 1;
  .bottom {
    &__title {
      font-weight: bold;
      ${({ theme }) => theme.colors.text}
    }
  }
`;
