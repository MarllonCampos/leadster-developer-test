import React from 'react';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
    <Container className="presentation">
      <span className="presentation-webinar">WEBINAR EXCLUSIVOS</span>
      <h2 className="presentation-subtitle">Menos Conversinha,</h2>
      <h1 className="presentation-title">Mais Conversão</h1>
      <hr className="presentation-text-divider" />
      <p className="presentation-text">
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio
      </p>
    </Container>
  );
};

export default Presentation;
