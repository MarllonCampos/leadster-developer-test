import React from 'react';

import { Container, SubHeaderContainer } from './styles';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <Container>
      <SubHeaderContainer>
        <Image src={'/logo.png'} width={212} height={42} alt="Leadster Logo" />
        <p>Transformando visitantes em clientes.</p>
      </SubHeaderContainer>
    </Container>
  );
};

export default Footer;
