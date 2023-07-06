import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(118, 137, 152, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div.attrs({ className: 'content' })`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 0;
  border-radius: 12px;
  width: clamp(300px, 90%, 600px);
  position: relative;
  overflow: auto;
  max-height: 90dvh;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: ${({ theme }) => theme.colors.shadow};
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.colors.shadow};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors['blue-200']};

    border-radius: 999px;
  }

  .content {
    &__heading {
      color: ${({ theme }) => theme.colors.text};
      text-align: center;
      max-width: 360px;
      margin: 0 auto;
    }

    &__default-title {
      color: ${({ theme }) => theme.colors['blue-200']};
    }
  }
`;
export const CloseContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  text-align: right;
  &:hover svg {
    background-color: ${({ theme }) => theme.colors.shadow};
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const Video = styled.iframe.attrs({ src: 'https://www.youtube.com/embed/o-YBDTqX_ZU' })`
  width: 100%;
  height: auto;
  margin: 30px 0;
  min-height: 300px;
  border: 0;
`;

export const DescriptionContainer = styled.div.attrs({ className: 'description-container' })`
  padding: 0 24px;
  .description-container {
    &__title {
    }
    &__divider {
      border: 0;
      margin: 4px 0 12px 0;
      border-top: 2px solid ${({ theme }) => theme.colors.shadow};
    }
  }
`;

export const ModalTitles = styled.p`
  color: ${({ theme }) => theme.colors['text-50']};
  font-weight: 700;
  margin-top: 12px;
`;

export const DownloadsContainer = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;
