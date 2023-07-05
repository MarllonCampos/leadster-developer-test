import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgb(118, 137, 152, 0.5);
  backdrop-filter: blur(2px);
`;

export const Content = styled.div.attrs({ className: 'content' })`
  background-color: ${({ theme }) => theme.colors.white};

  .content {
    &__heading {
      ${({ theme }) => theme.colors.text};
    }

    &__default-title {
      ${({ theme }) => theme.colors['blue-200']};
    }
  }
`;
export const CloseContainer = styled.div``;
