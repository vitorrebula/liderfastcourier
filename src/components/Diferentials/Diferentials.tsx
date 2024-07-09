import React, { useEffect } from "react";
import * as styled from './Diferentials.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Item {
  icon: JSX.Element;
  text: string;
}

interface Diferentials {
  title: string,
  items: Item[],
  page: number,
}

function Diferentials(props: Diferentials) {
  const { title, items, page } = props;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <styled.Container page={page}>
      <styled.Title data-aos="fade-down">{title}</styled.Title>
      <styled.Grid>
        {items.map((item, index) => (
          <styled.Item key={index} data-aos="fade-up" data-aos-duration={(index + 1) * 300}>
            <styled.IconWrapper>{item.icon}</styled.IconWrapper>
            <styled.Text>{item.text}</styled.Text>
          </styled.Item>
        ))}
      </styled.Grid>
    </styled.Container>
  );
};

export default Diferentials;