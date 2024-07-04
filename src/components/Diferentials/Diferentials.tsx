import React, { useEffect } from "react";
import * as styled from './Diferentials.styles';
import { CheckCircleOutlined, TeamOutlined, TruckOutlined, FileTextOutlined, LikeOutlined, LineChartOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Diferentials() {
    const items = [
        { icon: <CheckCircleOutlined />, text: 'Soluções de acordo com a necessidade e tamanho do cliente' },
        { icon: <TeamOutlined />, text: 'Um time experiente e uma empresa consolidada' },
        { icon: <LikeOutlined />, text: 'Entregas rápidas e seguras para proporcionar uma maior satisfação do seu cliente' },
        { icon: <TruckOutlined />, text: 'Uma frota preparada para atender qualquer tipo de demanda' },
        { icon: <FileTextOutlined />, text: 'Contratos personalizados e específicos para sua demanda' },
        { icon: <LineChartOutlined />, text: 'Uma logística veloz e integrada para alavancar resultados' },
      ];

      useEffect(() => {
        AOS.init();
      }, []);
    
      return (
        <styled.Container className="container">
          <styled.Title data-aos="fade-down">Diferenciais Kaio Chamone</styled.Title>
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