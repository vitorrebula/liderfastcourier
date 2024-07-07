import React, { useState } from 'react';
import * as styled from './CardServices.styles';

const cardData = [
  {
    image: './pessoa-caixa.png',
    title: 'Serviço de porta a porta',
    description: 'Contamos com uma ampla rede de bases próprias e correspondentes de alto nível..',
  },
  {
    image: './pessoa-caixa.png',
    title: 'Agentes aduaneiros',
    description: 'Descrição do serviço de agentes aduaneiros.',
  },
  {
    image: './pessoa-caixa.png',
    title: 'Logística nacional',
    description: 'Descrição do serviço de logística nacional terrestre.',
  },
  {
    image: './pessoa-caixa.png',
    title: 'Agência de carga aérea',
    description: 'Descrição do serviço de agência de carga aérea.',
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
