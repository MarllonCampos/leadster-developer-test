import React from 'react';

import { Container, Copyright, FooterNav, SubHeaderContainer } from './styles';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Container>
      <SubHeaderContainer>
        <Image src={'/logo.png'} width={212} height={42} alt="Leadster Logo" />
        <p>Transformando visitantes em clientes.</p>
      </SubHeaderContainer>
      <FooterNav></FooterNav>
      <Copyright className="copyright">
        <div className="copyright__content">
          <p className="copyright__text">
            Copyright &copy; 2015 - 2022 Todos os direitos reservados &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/" className="copyright__text-accent">
              Leadster
            </Link>
          </p>

          <p className="copyright__address">
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP 80010-000 | Termos de uso
          </p>
        </div>
      </Copyright>
    </Container>
  );
};

export default Footer;
