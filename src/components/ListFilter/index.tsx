import React from 'react';

import { Container, FilterButtonsContainer, FilterContainer } from './styles';
import { Button } from '../Button';

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
];

const orderOptions: FilterAndOrderProps[] = [
  {
    text: 'Data de Publicação',
    value: '',
  },
];

const ListFilter: React.FC = () => {
  const handleFilterClick = (value: string) => {
    console.log(value);
  };

  return (
    <Container>
      <FilterContainer>
        <FilterButtonsContainer>
          {filterButtons.map(({ value, text }) => (
            <Button key={value} onClick={() => handleFilterClick(value)} className="list-filter__buttons">
              {text}
            </Button>
          ))}
        </FilterButtonsContainer>
        <p className="list-filter__orderBy">Ordenar por</p>
        <select className="list-filter__select">{/* <option value></option> */}</select>
      </FilterContainer>
    </Container>
  );
};

export default ListFilter;
