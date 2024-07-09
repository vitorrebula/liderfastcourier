import React, { useState } from 'react';
import * as styled from './CardServices.styles';

const cardData = [
  {
    image: './1.png',
    title: 'Fretes cheios',
    description: 'Contamos com uma ampla rede de bases próprias e veículos prontos pra atender qualquer tipo de demanda, independente do volume ou peso.',
  },
  {
    image: './2.png',
    title: 'Entregas porta a porta',
    description: 'Realizamos entregas de itens porta a porta.',
  },
  {
    image: './3.png',
    title: 'Entregas urgentes',
    description: 'Estamos preparados pra atender à sua entrega com urgência, independente do volume ou peso.',
  },
  {
    image: './4.png',
    title: 'Contratos personalizados',
    description: 'Nos contratos, iremos conversar e entender as reais necessidades da sua logística, e propor um contrato, com condições exclusivas e atendimento preferencial.',
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
