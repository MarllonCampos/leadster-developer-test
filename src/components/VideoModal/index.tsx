'use client';

import React, { useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import {
  Container,
  Content,
  CloseContainer,
  Video,
  DescriptionContainer,
  ModalTitles,
  DownloadsContainer,
} from './styles';
import { VideoInfo } from '@/types/videos';
import DownloadChips from '../DownloadChips';
type Props = {
  video: VideoInfo;
  handleCloseModal: () => void;
};
const VideoModal: React.FC<Props> = (props) => {
  useEffect(() => {
    window.document.body.classList.add('hidden');
    return () => {
      window.document.body.classList.remove('hidden');
    };
  }, []);

  function handleContentContainerClick(event: MouseEvent) {
    event.stopPropagation();
  }

  return createPortal(
    <Container onClick={props.handleCloseModal}>
      <Content onClick={handleContentContainerClick}>
        <CloseContainer>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#578696"
            role="button"
            onClick={props.handleCloseModal}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <line x1="16" y1="16" x2="48" y2="48"></line>
              <line x1="48" y1="16" x2="16" y2="48"></line>
            </g>
          </svg>
        </CloseContainer>
        <h3 className="content__heading">
          <strong className="content__default-title">Webinar: </strong>
          {props.video.title}
        </h3>
        <Video />
        <DescriptionContainer>
          <ModalTitles className="description-container__title">Descrição</ModalTitles>
          <hr className="description-container__divider" />
          <p className="description-container">{props.video.description}</p>
          <ModalTitles className="description-container__downloads-title">Downloads</ModalTitles>
          <hr className="description-container__divider" />
          <DownloadsContainer>
            {props.video.downloads.map(({ name, type }, index) => (
              <DownloadChips key={`${index}-${name}`} title={name} type={type} />
            ))}
          </DownloadsContainer>
        </DescriptionContainer>
      </Content>
    </Container>,
    document.body
  );
};

export default VideoModal;
