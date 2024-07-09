import React, { useState } from 'react';
import * as styled from './CardServices.styles';

const cardData = [
  {
    image: './2.png',
    title: 'Follow City',
    description: 'Distribuição de sua encomenda ou impressos em qualquer cidade do Brasil.',
  },
  {
    image: './3.png',
    title: 'Follow Courier',
    description: 'Entrega Super Urgente: de 3 à 10hs. após a coleta. / Entrega no mesmo dia: de 10 à 24hs. após a coleta. / Entrega no dia seguinte: de 24 à 48hs. após a coleta.',
  },
  {
    image: './1.png',
    title: 'Follow Return',
    description: 'Sua encomenda retorna de qualquer lugar do Brasil até suas mãos.',
  },
  {
    image: './4.png',
    title: 'Follow Zoom',
    description: 'Aluguel de um office-boy motorizado, executando seus serviços diários pelo tempo que desejar.',
  },
];

function CardServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <styled.CardContainer>
      {cardData.map((card, index) => (
        <styled.Card
          key={index}
          isActive={index === activeIndex}
          onClick={() => handleCardClick(index)}
        >
          <styled.CardImage src={card.image} alt={card.title} />
          <styled.CardTitle>{card.title}</styled.CardTitle>
          <styled.CardContent>
            <styled.CardDescription>{card.description}</styled.CardDescription>
          </styled.CardContent>
        </styled.Card>
      ))}
    </styled.CardContainer>
  );
};

export default CardServices;
