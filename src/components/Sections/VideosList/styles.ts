import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px 10px;
  max-width: 1180px;
  margin: 0 auto;
`;

export const FiltersContainer = styled.div``;

export const VideosContainer = styled.div`
  border: 0 solid ${({ theme }) => theme.colors.shadow};
  margin-top: 24px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  padding: 40px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px;
`;
