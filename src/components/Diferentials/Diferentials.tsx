import React from "react";
import * as styled from './Diferentials.styles';
import { CheckCircleOutlined, TeamOutlined, TruckOutlined, FileTextOutlined, LikeOutlined, LineChartOutlined } from '@ant-design/icons';

function Diferentials() {
    const items = [
        { icon: <CheckCircleOutlined />, text: 'Soluções de acordo com a necessidade e tamanho do cliente' },
        { icon: <TeamOutlined />, text: 'Um time experiente e uma empresa consolidada' },
        { icon: <LikeOutlined />, text: 'Entregas rápidas e seguras para proporcionar uma maior satisfação do seu cliente' },
        { icon: <TruckOutlined />, text: 'Uma frota preparada para atender qualquer tipo de demanda' },
        { icon: <FileTextOutlined />, text: 'Contratos personalizados e específicos para sua demanda' },
        { icon: <LineChartOutlined />, text: 'Uma logística veloz e integrada para alavancar resultados' },
      ];
    
      return (
        <styled.Container className="container">
          <styled.Title>Diferenciais Kaio Chamone</styled.Title>
          <styled.Grid>
            {items.map((item, index) => (
              <styled.Item key={index}>
                <styled.IconWrapper>{item.icon}</styled.IconWrapper>
                <styled.Text>{item.text}</styled.Text>
              </styled.Item>
            ))}
          </styled.Grid>
        </styled.Container>
      );
};

export default Diferentials;