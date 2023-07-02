import React, { useCallback, useState } from 'react';

import { Container, FiltersContainer } from './styles';
import ListFilter from '@/components/ListFilter';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const VideosList: React.FC = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const orderParam = searchParams.get('order');
  const filterParam = searchParams.get('filter');
  const [filter, setFilter] = useState(filterParam || '');
  const [order, setOrder] = useState(orderParam || '');

  const x = useCallback(() => {
    console.log(order, filter);
  }, [order, filter]);

  const filterChange = (value: string) => {
    console.log(value);
  };

  const orderChange = (value: string) => {};

  return (
    <Container>
      <FiltersContainer>
        <ListFilter handleFilterChange={filterChange} handleOrderChange={orderChange} filterSelected={filterParam} />
      </FiltersContainer>
    </Container>
  );
};

export default VideosList;
