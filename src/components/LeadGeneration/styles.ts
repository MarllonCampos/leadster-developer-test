import styled, { css } from 'styled-components';

const DESKTOP_SIZE = '1082px';
const MOBILE_SIZE = '478px';

export const Container = styled.div`
  padding: 40px 0;

  background-color: ${({ theme }) => theme.colors['blue-50']};
`;

const comparativeImageMediaQuery = css`
  @media screen and (max-width: 456px) {
    max-width: 340px;
    max-height: 340px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  max-width: 1180px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .comparative-image {
    flex-basis: 320px;
    ${comparativeImageMediaQuery}
  }
`;

const textContainerMediaQuery = css`
  @media screen and (max-width: ${DESKTOP_SIZE}) {
    text-align: center;
  }
`;

export const TextContainer = styled.div.attrs({ className: 'text-container' })`
  display: flex;
  flex-direction: column;
  padding: 0 12px;

  .text-container {
    &__heading {
      color: ${({ theme }) => theme.colors.text};
      font-size: 34px;
      font-weight: 500;
    }

    &__subtitle {
      color: ${({ theme }) => theme.colors.text};
      font-size: 36px;
    }

    &__text {
      font-weight: 500;
      color: ${({ theme }) => theme.colors['text-50']};
    }

    &__divider {
      margin: 24px 0;
      border: 0;
      border-top: 2px solid ${({ theme }) => theme.colors.shadow};
    }
  }

  ${textContainerMediaQuery}
`;

const buttonsContainerMediaQuery = css`
  @media screen and (max-width: ${DESKTOP_SIZE}) {
    justify-content: center;
  }
`;

const viewDemoButtonMediaQuery = css`
  @media screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 12px;
  }
`;

const rdStampMediaQuery = css`
  @media screen and (max-width: 415px) {
    width: 160px;
  }
`;

export const ButtonsContainer = styled.div.attrs({ className: 'button-container' })`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;

  .button-container {
    &__view-demo {
      padding: 14px 34px;
      ${viewDemoButtonMediaQuery}
    }

    &__rd-stamp {
      ${rdStampMediaQuery}
    }
  }
  ${buttonsContainerMediaQuery}
`;

const ratingMediaQuery = css`
  @media screen and (max-width: 642px) {
    flex-direction: column;
  }
`;

export const Rating = styled.div.attrs({ className: 'rating' })`
  display: flex;
  align-items: center;

  .rating {
    &__text {
      font-weight: 500;
      margin-left: 4px;
      color: ${({ theme }) => theme.colors['text-50']};
    }

    &__average-satisfaction {
      font-weight: 500;
      color: ${({ theme }) => theme.colors['text-50']};
    }
  }

  ${ratingMediaQuery}
`;

const creditCardContainerMediaQuery = css`
  @media screen and (min-width: 643px) {
    &:after {
      content: '|';
      display: block;
      margin: 0px 5px;
    }
  }
`;

export const CreditCardContainer = styled.div`
  display: flex;
  align-items: center;

  ${creditCardContainerMediaQuery}
`;
export const RatingSatisfactionContainer = styled.div`
  display: flex;
  align-items: center;
`;
