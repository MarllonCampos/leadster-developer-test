'use client';
import React, { useEffect, useState } from 'react';

import { Container, FiltersContainer, VideosContainer } from './styles';
import ListFilter from '@/components/ListFilter';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import VideoCard from '@/components/VideoCard';
import { VideoInfo } from '@/types/videos';
import Pagination from '@/components/Pagination';
import DownloadChips from '@/components/DownloadChips';
import VideoModal from '@/components/VideoModal';

type VideosInfoState = {
  videosList: Array<VideoInfo>;
  pages: number;
};

type ApiAndQueryParams = {
  filterValue: string | null;
  orderValue: string | null;
  pageValue: number | null;
};

const VideosList: React.FC = () => {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get('order');
  const filterParam = searchParams.get('filter');
  const pageParam = Number(searchParams.get('page'));

  const [filter, setFilter] = useState(filterParam);
  const [order, setOrder] = useState(orderParam);
  const [page, setPage] = useState(pageParam);
  const [videosInfo, setVideosInfo] = useState<VideosInfoState>({ videosList: [], pages: 0 });
  const [modalInfo, setModalInfo] = useState<VideoInfo | null>(null);
  function createNewPathName({ filterValue, orderValue, pageValue }: ApiAndQueryParams): string {
    const queryParams: string[] = [];

    if (filterValue) {
      queryParams.push(`filter=${filterValue}`);
    }
    if (orderValue) {
      queryParams.push(`order=${orderValue}`);
    }
    if (pageValue) {
      queryParams.push(`page=${pageValue}`);
    }

    return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  }

  function getList({ filterValue, orderValue, pageValue }: ApiAndQueryParams) {
    const createUrl = `api/videos${createNewPathName({ filterValue, orderValue, pageValue })}`;
    return fetch(createUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  useEffect(() => {
    const ApiAndQueryParamsObject = {
      filterValue: filter,
      orderValue: order,
      pageValue: page,
    };

    history.replaceState(null, '', createNewPathName(ApiAndQueryParamsObject));
    getList(ApiAndQueryParamsObject).then(({ videos, pages }) => setVideosInfo({ videosList: videos, pages }));
  }, [order, filter, page]);

  useEffect(() => {
    if (page > 1) document.getElementById('videos')?.scrollIntoView();
  }, [page]);
  const filterChange = (value: string) => {
    setFilter(value);
    setPage(1);
  };

  const orderChange = (value: string) => {
    setOrder(value);
    setPage(1);
  };

  const pageChange = (value: number) => {
    setPage(value);
  };

  function handleOpenModal(videoProps: VideoInfo) {
    setModalInfo(videoProps);
  }
  function handleCloseModal() {
    setModalInfo(null);
  }

  return (
    <Container id="videos">
      <FiltersContainer>
        <ListFilter
          handleFilterChange={filterChange}
          handleOrderChange={orderChange}
          filterSelected={filter || 'all'}
        />
      </FiltersContainer>
      <VideosContainer>
        {videosInfo &&
          videosInfo.videosList.map((videoProps, index) => (
            <VideoCard key={index} title={videoProps.title} handleVideoCardClick={() => handleOpenModal(videoProps)} />
          ))}
      </VideosContainer>
      {videosInfo.pages > 1 ? (
        <Pagination pages={videosInfo.pages} selectedPage={page || 1} handlePageChange={pageChange} />
      ) : null}
      {modalInfo && <VideoModal video={modalInfo} handleCloseModal={handleCloseModal} />}
    </Container>
  );
};

export default VideosList;
