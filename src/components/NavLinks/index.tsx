import React from 'react';

import { Container, LinkItem, NavLinksTitle } from './styles';
import Link from 'next/link';

export type LinksProps = {
  text: string;
  link: string;
};
type Props = {
  title: string;
  links: LinksProps[];
};

const NavLinks: React.FC<Props> = ({ title, links }) => {
  return (
    <Container>
      <NavLinksTitle>{title}</NavLinksTitle>
      <ul>
        {links.map(({ link, text }) => (
          <LinkItem key={`${text}-${link}}`}>
            <Link href={link}>{text}</Link>
          </LinkItem>
        ))}
      </ul>
    </Container>
  );
};

export default NavLinks;
