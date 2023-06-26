import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'navsocials' })`
  .navsocials {
    &__icons {
      display: flex;
      align-items: center;
      gap: 14px;
      margin: 24px 0;

      li {
        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    &__contact-info {
      color: ${({ theme }) => theme.colors['text-50']};
      &__links {
        text-decoration: none;
        color: ${({ theme }) => theme.colors['blue-100']};
        font-weight: 300;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
