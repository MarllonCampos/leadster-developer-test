import { SocialLinks } from '@/components/NavSocials';
import { MOBILE_DEVICE_SIZE } from './mobileDeviceSize';

interface FormattedSocialLinks {
  innerWidth: number;
  socialLinksArray: SocialLinks[];
}

export function convertSocialLinksToDeepLink({ innerWidth, socialLinksArray }: FormattedSocialLinks): SocialLinks[] {
  if (innerWidth > MOBILE_DEVICE_SIZE) return socialLinksArray;
  return [
    {
      url: 'https://www.linkedin.com/in/marllon-campos/',
      icon: '/linkedin-logo.svg',
      alt: 'Linkedin',
    },
    {
      url: 'fb://facewebmodal/f?href=https://www.facebook.com/leadsterplatform',
      icon: '/facebook-logo.svg',
      alt: 'Facebook',
    },
    {
      url: 'instagram://user?username=leadster.com.br',
      icon: '/instagram-logo.svg',
      alt: 'Instagram',
    },
  ];
}
