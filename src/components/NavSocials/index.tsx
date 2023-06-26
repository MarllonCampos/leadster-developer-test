'use client';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { MOBILE_DEVICE_SIZE } from '@/helpers/mobileDeviceSize';
import { convertSocialLinksToDeepLink } from '@/helpers/convertSocialLinksToDeepLink';
export type SocialLinks = {
  url: string;
  icon: string;
  alt: string;
};
const socialLinks: SocialLinks[] = [
  {
    url: 'https://www.linkedin.com/in/marllon-campos/',
    icon: '/linkedin-logo.svg',
    alt: 'Linkedin',
  },
  {
    url: 'https://www.facebook.com/leadsterplatform',
    icon: '/facebook-logo.svg',
    alt: 'Facebook',
  },
  {
    url: 'https://www.instagram.com/leadster.com.br/',
    icon: '/instagram-logo.svg',
    alt: 'Instagram',
  },
];

const NavSocials: React.FC = () => {
  const [socialState, setSocialState] = useState<SocialLinks[]>(socialLinks);

  function changeLinksToMobile(event: Event) {
    const target = event.target as Window;
    if (target.innerWidth < MOBILE_DEVICE_SIZE) {
      return setSocialState((prevState) =>
        convertSocialLinksToDeepLink({
          innerWidth: target.innerWidth,
          socialLinksArray: prevState,
        })
      );
    } else {
      setSocialState(socialLinks);
    }
  }

  useEffect(() => {
    if (window.innerWidth < MOBILE_DEVICE_SIZE) {
      setSocialState((prevState) =>
        convertSocialLinksToDeepLink({
          innerWidth: window.innerWidth,
          socialLinksArray: prevState,
        })
      );
    }
    window.addEventListener('resize', changeLinksToMobile);

    () => {
      window.removeEventListener('resize', changeLinksToMobile);
    };
  }, []);

  return (
    <Container>
      <h4>Siga a Leadster</h4>
      <ul className="navsocials__icons">
        {socialState.map(({ url, icon, alt }) => (
          <li key={url}>
            <Link target="_blank" href={url}>
              <Image alt={alt} src={icon} width={45} height={45} />
            </Link>
          </li>
        ))}
      </ul>

      <p className="navsocials__contact-info">
        E-mail:{' '}
        <Link className="navsocials__contact-info__links" href="mailto:marllondcsp@gmail.com">
          marllondcsp@gmail.com
        </Link>
      </p>
      <p className="navsocials__contact-info">
        Telefone:{' '}
        <Link className="navsocials__contact-info__links" href="tel:+5511962570745">
          (11)962**-****
        </Link>
      </p>
    </Container>
  );
};

export default NavSocials;
