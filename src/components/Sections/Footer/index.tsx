import React from 'react';

import { Container, Copyright, FooterNav, SubHeaderContainer } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '../../NavLinks';
import NavSocials from '../../NavSocials';

type NavLinksObjectsLinks = {
  text: string;
  link: string;
};

type NavLinksObjects = {
  title: string;
  links: NavLinksObjectsLinks[];
};

const navLinks: NavLinksObjects[] = [
  {
    title: 'Links Principais',
    links: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Ferramenta',
        link: '/links-principais/ferramenta',
      },
      {
        text: 'Preços',
        link: '/links-principais/precos',
      },
      {
        text: 'Contato',
        link: '/links-principais/contato',
      },
    ],
  },
  {
    title: 'Cases',
    links: [
      {
        text: 'Geração de Leads B2B',
        link: '/cases/geracao-de-leads/b2b',
      },
      {
        text: 'Geração de Leads em Software',
        link: '/cases/geracao-de-leads/software',
      },
      {
        text: 'Geração de Leads em Imobiliaria',
        link: '/cases/geracao-de-leads/imobiliaria',
      },
      {
        text: 'Preços',
        link: '/cases/cases-de-sucesso',
      },
    ],
  },
  {
    title: 'Materiais',
    links: [
      {
        text: 'Blog',
        link: '/materiais/blog',
      },
      {
        text: 'Parceria com Agências',
        link: '/materiais/parceria-agencias',
      },
      {
        text: 'Guia Definitivo do Marketing',
        link: '/materiais/guia-marketing',
      },
      {
        text: 'Materiais Gratuitos',
        link: '/materiais/materiais-free',
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <Container>
      <SubHeaderContainer>
        <Image src={'/logo.png'} width={212} height={42} alt="Leadster Logo" />
        <p>Transformando visitantes em clientes.</p>
      </SubHeaderContainer>
      <FooterNav>
        {navLinks.map(({ title, links }, index) => (
          <NavLinks key={`${title}-${index}`} title={title} links={links} />
        ))}
        <NavSocials />
      </FooterNav>
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
