import React from 'react';

import { Container } from './styles';
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
      {filterButtons.map(({ value, text }) => (
        <Button key={value} onClick={() => handleFilterClick(value)}>
          {text}
        </Button>
      ))}

      <p className="list-filter__orderBy">Ordenar por</p>
      <select className="list-filter__select">
        <option value></option>
      </select>
    </Container>
  );
};

export default ListFilter;
