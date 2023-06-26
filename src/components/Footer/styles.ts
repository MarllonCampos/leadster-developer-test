import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
`;

export const SubHeaderContainer = styled.header`
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const copyrightMediaQuery = css`
  @media screen and (max-width: 865px) {
    .copyright {
      &__content {
        align-items: center;
        flex-direction: column;
      }
    }
  }
`;

export const Copyright = styled.div.attrs({ className: 'copyright' })`
  width: 100%;
  padding: 40px 12px;
  font-size: 12px;

  box-shadow: 0px -1px 1px ${({ theme }) => theme.colors.shadow};
  .copyright {
    &__content {
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    ${({ theme }) => css`
      &__text {
        &-accent {
          text-decoration: none;
          font-weight: bold;
        }
      }
    `}
  }

  ${copyrightMediaQuery}
`;

export const FooterNav = styled.nav`
  width: 100%;
  max-width: 1180px;

  display: flex;
  flex-wrap: wrap;
  gap: 35px;

  padding: 40px 20px;
  margin: 0 auto;
`;
