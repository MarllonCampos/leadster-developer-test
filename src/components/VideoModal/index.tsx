'use client';

import React from 'react';
import { createPortal } from 'react-dom';

import { Container, Content, CloseContainer } from './styles';
import { VideoInfo } from '@/types/videos';
type Props = {
  video: VideoInfo;
  handleCloseModal: () => void;
};
const VideoModal: React.FC<Props> = (props) => {
  return createPortal(
    <Container>
      <Content>
        <CloseContainer></CloseContainer>
        <h3 className="content__heading">
          <strong className="content__default-title">Webinar:</strong>
          {props.video.title}
        </h3>
      </Content>
    </Container>,
    document.body
  );
};

export default VideoModal;
