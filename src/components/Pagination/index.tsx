import React from 'react';

import { Container, ListItem } from './styles';
import Link from 'next/link';

type Props = {
  pages: number;
  selectedPage?: number;
  handlePageChange: (value: number) => void;
};

const Pagination: React.FC<Props> = ({ pages, selectedPage, handlePageChange }) => {
  const arrayOfPages = Array(pages).fill(null);

  const handleListItemClick = (value: number) => {
    console.log(value, 'paginations');

    handlePageChange(value);
  };
  return (
    <Container>
      <p className="pagination__text">Página</p>
      <ul className="pagination__list-container">
        {arrayOfPages.map((_, index) => (
          <ListItem
            key={index}
            selected={selectedPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
            as={Link}
            href="#videos"
          >
            {index + 1}
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default Pagination;
