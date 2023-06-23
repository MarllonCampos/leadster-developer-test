import React from 'react';

import { Container } from './styles';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={'/logo.png'} width={194} height={42} alt="Leadster Logo" />
    </Container>
  );
};

export default Header;
