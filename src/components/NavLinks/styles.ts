import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 260px;
`;

export const NavLinksTitle = styled.h4`
  margin-bottom: 40px;
`;

export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    font-weight: 300;
    color: ${({ theme }) => theme.colors['text-50']};

    &:hover {
      text-decoration: underline;
    }
  }
`;
