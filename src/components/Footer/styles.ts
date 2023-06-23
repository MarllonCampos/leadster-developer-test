import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0;
`;

export const SubHeaderContainer = styled.header`
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;
