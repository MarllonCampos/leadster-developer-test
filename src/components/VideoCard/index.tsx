import React from 'react';

import { Bottom, Container } from './styles';
import Image from 'next/image';

type Props = {
  handleVideoCardClick: () => void;
  title: string;
};

const VideoCard: React.FC<Props> = ({ handleVideoCardClick, title }) => {
  return (
    <Container onClick={handleVideoCardClick}>
      <Image src={'/video-cover.png'} width={370} height={214} alt="Video Cover" style={{ objectFit: 'fill' }} />
      <Bottom>
        <p className="bottom__title">{title}</p>
      </Bottom>
    </Container>
  );
};

export default VideoCard;
