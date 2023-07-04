'use client';
import React, { useCallback, useEffect, useState } from 'react';

import { Container, FiltersContainer, VideosContainer } from './styles';
import ListFilter from '@/components/ListFilter';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import VideoCard from '@/components/VideoCard';
import { VideoInfo } from '@/types/videos';

const VideosList: React.FC = () => {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get('order');
  const filterParam = searchParams.get('filter');
  const [filter, setFilter] = useState(filterParam || 'all');
  const [order, setOrder] = useState(orderParam || 'desc');
  const [videosList, setVideosList] = useState<Array<VideoInfo> | []>([]);
  function createNewPathName({ filterValue, orderValue }: { filterValue: string; orderValue: string }): string {
    if (order && filter) return `?filter=${filterValue}&order=${orderValue}`;

    if (order) return `?order=${orderValue}`;
    if (filter) return `?filter=${filterValue}`;
    return '';
  }

  function getList({ filterValue, orderValue }: { filterValue: string; orderValue: string }) {
    const createUrl = `api/videos${createNewPathName({ filterValue, orderValue })}`;
    return fetch(createUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  useEffect(() => {
    history.replaceState(null, '', createNewPathName({ filterValue: filter, orderValue: order }));
    console.log('useEffect');
    getList({ filterValue: filter, orderValue: order }).then((response) => setVideosList(response));
  }, [order, filter]);

  const filterChange = (value: string) => {
    setFilter(value);
  };

  const orderChange = (value: string) => {
    setOrder(value);
  };

  function handleOpenModal(videoProps: VideoInfo) {
    console.log(videoProps);
  }

  return (
    <Container>
      <FiltersContainer>
        <ListFilter
          handleFilterChange={filterChange}
          handleOrderChange={orderChange}
          filterSelected={filter || 'all'}
        />
      </FiltersContainer>
      <VideosContainer>
        {videosList.map((videoProps, index) => (
          <VideoCard key={index} title={videoProps.title} handleVideoCardClick={() => handleOpenModal(videoProps)} />
        ))}
      </VideosContainer>
    </Container>
  );
};

export default VideosList;
