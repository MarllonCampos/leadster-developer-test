import { myTheme } from '@/styles/tokens';
import { DownloadChipsType } from '@/types/videos';
import Link from 'next/link';
import styled, { css } from 'styled-components';

type TypeProps = {
  type: DownloadChipsType;
};

const COLORS = {
  xls: {
    containerColor: '#C2F4EA',
    textColor: '#00AE7F',
    iconColor: '#9FEFDF',
  },
  doc: {
    containerColor: '#C2E6FF',
    textColor: '#279BF1',
    iconColor: '#A1D9FF',
  },
  ppt: {
    containerColor: '#FFF8D0',
    textColor: '#A99445',
    iconColor: '#FFF1A0',
  },
  zip: {
    containerColor: '#E8EEF3',
    textColor: '#8F979F',
    iconColor: '#D0DEE7',
  },
};

export const Container = styled(Link).attrs<TypeProps>({ className: 'download-chips' })`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding-right: 8px;

  border-radius: 6px;
  background-color: ${({ type }) => COLORS[type].containerColor};
  text-decoration: none;
  ${({ type }) => css`
    .download-chips {
      &__name {
        color: ${COLORS[type].textColor};
        font-weight: 600;
      }

      &__icon {
        padding: 6px;
        box-sizing: initial;
        border-radius: inherit;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        color: ${COLORS[type].textColor};
        background-color: ${COLORS[type].iconColor};
      }
    }
  `}
`;
