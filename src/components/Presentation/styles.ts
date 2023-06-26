import styled from 'styled-components';
import { css } from 'styled-components';

const titleMediaQuery = css`
  @media screen and (max-width: 590px) {
    font-size: 60px;
    &:after {
      transform: scale(0.83) translate(-75%, 0%);
    }
  }

  @media screen and (max-width: 490px) {
    font-size: 44px;

    &:after {
      transform: scale(0.75) translate(-75%, -25%);
    }
  }
`;

export const Container = styled.main.attrs({ className: 'presentation' })`
  padding: 10em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors['blue-50']};
  `}
  .presentation {
    ${({ theme }) => css`
      &-webinar {
        font-weight: 700;
        padding: 10px 18px;
        border: 2px solid ${theme.colors['blue-200']};
        border-radius: 24px 24px 24px 5px;
        color: ${theme.colors['blue-200']};
        margin-bottom: 30px;
        cursor: pointer;
        transition: background 0.2s linear, color 0.2s linear;

        &:hover {
          color: ${theme.colors.white};
          background-color: ${theme.colors['blue-200']};
        }
      }

      &-subtitle {
        font-weight: 500;
        font-size: 32px;
        color: ${theme.colors.text};
      }

      &-title {
        position: relative;
        font-weight: bold;
        font-size: 72px;

        background-color: ${theme.colors['blue-200']};

        background-image: linear-gradient(-45deg, #2c83fb, #1f76f0);

        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;

        transition: font-size 0.1s linear;
        line-height: 1;
        &:after {
          content: '';
          position: absolute;
          width: 49px;
          height: 32px;
          background-image: url('/asset-header.png');
          background-size: cover;
          transform: translate(-65%, 0%);
          float: right;
          top: -2px;
        }

        // Media query for title
        ${titleMediaQuery}
      }

      &-text-divider {
        background-color: ${theme.colors.shadow};
        height: 2px;
        border: 0;
        width: clamp(300px, 90%, 725px);
        padding: 0 24px;
        margin: 35px 24px;
      }

      &-text {
        color: ${theme.colors.text};
        font-weight: 500;
      }
    `}
  }
`;
