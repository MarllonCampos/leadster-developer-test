import React from 'react';

import {
  ButtonsContainer,
  Container,
  Content,
  CreditCardContainer,
  Rating,
  RatingSatisfactionContainer,
  TextContainer,
} from './styles';
import Image from 'next/image';
import { Button } from '../Button';

const LeadGeneration: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image
          src={'/comparativo_img_CTA.png'}
          width={440}
          height={440}
          alt="Comparativo w/o Leadster"
          className="comparative-image"
        />
        <TextContainer>
          <p className="text-container__heading">Pronto para triplicar sua</p>
          <strong className="text-container__subtitle">Geração de Leads?</strong>
          <span className="text-container__text">
            Criação e ativação em <strong>4 minutos</strong>
          </span>
          <hr className="text-container__divider" />
          <ButtonsContainer>
            <Button selected className="button-container__view-demo">
              VER DEMONSTRAÇÃO
            </Button>
            <Image
              src={'/selo_RD.png'}
              width={180}
              height={70}
              alt="Selo do RD"
              className="button-container__rd-stamp"
            />
          </ButtonsContainer>
          <Rating>
            <CreditCardContainer>
              <Image src={'/no-card-dark.webp'} width={16} height={16} alt="Sem necessidade de cartão" />
              <p className="rating__text">
                <strong>Não</strong> é necessário Cartão de Crédito
              </p>
            </CreditCardContainer>
            <RatingSatisfactionContainer>
              <Image src={'/rating.webp'} width={92} height={16} alt="Média de sastisfação" />
              &nbsp;
              <span className="rating__average-satisfaction">
                <strong>4,9</strong>/5 média de satisfação
              </span>
            </RatingSatisfactionContainer>
          </Rating>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default LeadGeneration;
