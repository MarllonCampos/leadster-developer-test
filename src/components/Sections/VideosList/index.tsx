import React from 'react';

import { Container, FiltersContainer } from './styles';
import ListFilter from '@/components/ListFilter';

const VideosList: React.FC = () => {
  return (
    <Container>
      <FiltersContainer>
        <ListFilter />
      </FiltersContainer>
    </Container>
  );
};

export default VideosList;
