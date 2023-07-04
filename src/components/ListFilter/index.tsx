import React, { ChangeEvent } from 'react';

import { Container, FilterButtonsContainer, FilterContainer, OrderByContainer, Select } from './styles';
import { Button } from '../Button';
import Link from 'next/link';

type FilterAndOrderProps = {
  text: string;
  value: string;
};

const filterButtons: FilterAndOrderProps[] = [
  {
    text: 'Agências',
    value: 'agencias',
  },
  {
    text: 'Chatbot',
    value: 'chatbot',
  },
  {
    text: 'Marketing Digital',
    value: 'marketing-digital',
  },
  {
    text: 'Geração de Leads',
    value: 'geracao-de-leads',
  },
  {
    text: 'Mídia Paga',
    value: 'midia-paga',
  },
  {
    text: 'Todos',
    value: 'all',
  },
];

const orderOptions: FilterAndOrderProps[] = [
  {
    text: 'Mais Recentes',
    value: 'desc',
  },
  {
    text: 'Mais Antigas',
    value: 'asc',
  },
];

type Props = {
  handleFilterChange: (value: string) => void;
  handleOrderChange: (value: string) => void;
  filterSelected?: string | null;
};

const ListFilter: React.FC<Props> = ({ handleFilterChange, handleOrderChange, filterSelected }) => {
  const handleFilterClick = (value: string) => {
    if (value === filterSelected) return;
    handleFilterChange(value);
  };

  const handleSelectOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    handleOrderChange(value);
  };
  return (
    <Container>
      <FilterContainer>
        <FilterButtonsContainer>
          {filterButtons.map(({ value, text }) => (
            <Button
              key={value}
              onClick={() => handleFilterClick(value)}
              className="list-filter__buttons"
              selected={value === filterSelected}
            >
              {text}
            </Button>
          ))}
        </FilterButtonsContainer>
        <OrderByContainer>
          <p className="list-filter__orderBy">Ordenar por</p>
          <Select onChange={handleSelectOnChange}>
            <option defaultChecked>Data de Publicação</option>
            {orderOptions.map(({ text, value }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </Select>
        </OrderByContainer>
      </FilterContainer>
    </Container>
  );
};

export default ListFilter;
