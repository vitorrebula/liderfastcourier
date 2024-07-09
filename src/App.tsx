import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/ContentAbout'
import { Graphs } from './components/ContentGraph';
import { Diferentials } from './components/Diferentials';
import { BrasilAction } from './components/BrasilAction';
import { MailSender } from './components/MailSender';
import { Footer } from './components/Footer';

import { FixedWppButton } from './components/FixedWppButton';
import './App.css';
import * as styled from './App.styles'
import Timeline from './components/TimeLine/Timeline';
import { CheckCircleOutlined, TeamOutlined, TruckOutlined, FileTextOutlined, LikeOutlined, LineChartOutlined, CalendarOutlined, LaptopOutlined, SafetyOutlined } from '@ant-design/icons';
import { CardServices } from './components/Cardservices';
import { Carrossel } from './components/Carrossel';


function App() {
  const [page, setPage] = useState(1);

  const itemsforHome = [
    { icon: <CheckCircleOutlined />, text: 'Soluções de acordo com a necessidade e tamanho do cliente' },
    { icon: <TeamOutlined />, text: 'Um time experiente e uma empresa consolidada' },
    { icon: <LikeOutlined />, text: 'Entregas rápidas e seguras para proporcionar uma maior satisfação do seu cliente' },
    { icon: <TruckOutlined />, text: 'Uma frota preparada para atender qualquer tipo de demanda' },
    { icon: <FileTextOutlined />, text: 'Contratos personalizados e específicos para sua demanda' },
    { icon: <LineChartOutlined />, text: 'Uma logística veloz e integrada para alavancar resultados' },
  ];

  const itemsforPage2 = [
    { icon: <LineChartOutlined />, text: 'Alavanque suas vendas com uma logística experiente' },
    { icon: <CalendarOutlined />, text: 'Suas entregas sempre em dia, e seu cliente mais feliz!' },
    { icon: <LaptopOutlined />, text: 'Obtenha uma orçamento online, e conte conosco como parceiros!' },
    { icon: <TruckOutlined />, text: 'Uma frota preparada para atender qualquer tipo de demanda' },
    { icon: <FileTextOutlined />, text: 'Contratos personalizados e específicos para sua demanda' },
    { icon: <SafetyOutlined />, text: 'Conte com segurança e confiança em seus fretes e suas encomendas.' },
  ];

  return (
    <styled.InitialPage>
      <Navbar setPage={setPage} />
      {page === 1 ? (
        <>
          <Hero
            backimg='./herobg.png'
            img='./logowhite.png'
            title='LIDER FAST COURIER'
            text='Obrigado por liderar conosco!'
            buttontext='Faça um orçamento!'
            page={page}
          />
          <About title='Mais de 20 anos como referência no Transporte' text={['Desde o início, temos inovado constantemente para atender às necessidades dinâmicas de nossos clientes, garantindo entregas rápidas e seguras. Nossa história de sucesso é marcada pela dedicação contínua à excelência e ao serviço ao cliente, posicionando-nos como a escolha preferida para soluções logísticas confiáveis e eficientes.']} />
          <Graphs />
          <Diferentials title='Diferenciais que nos fazem Líderes!' items={itemsforHome} page={page}/>
          <BrasilAction />
          <MailSender />
          <Footer />
        </>
      ) : (page === 2 ? (
        <>
          <Hero
            backimg='./herobg.png'
            img='./logowhite.png'
            title='QUEM SOMOS?'
            text='Conheça um pouco mais sobre nossa história, e entenda o porquê de sermos Lideres, não só no nome, mas em excelência e profissionalismo.'
            buttontext='Faça um orçamento!'
            page={page}
          />
          <About
            title='Quem somos?'
            text={['A Lider Fast Courier é uma empresa tradicional e experiente no ramo de transportes, comprometida em oferecer serviços de entrega rápida e segura. Com anos de atuação no mercado, nossa missão é proporcionar uma experiência de entrega excepcional, combinando agilidade, segurança e precisão. Nossa equipe de profissionais qualificados trabalha incansavelmente para superar as expectativas dos clientes, utilizando tecnologia de ponta e práticas inovadoras para garantir a máxima satisfação. Confie na Lider Fast Courier para suas necessidades de entrega e descubra a diferença de contar com uma empresa que preza pela excelência e pelo compromisso com a qualidade.']}
          />
          <Diferentials title='Os benefícios de confiar em uma Empresa Tradicional como a Líder' items={itemsforPage2} page={page}/>
          <Timeline />
          <Footer />
        </>
      ) : (
        <>
          <Hero
            backimg='./herobg.png'
            img='pessoa-caixa.png'
            title='SERVIÇOS LÍDER'
            text='Fazemos qualquer tipo de serviço relacionado ao transporte, e contamos com uma experiência de 30 anos de mercado!!'
            buttontext='Saiba mais!'
            page={page}
          />
          <About title='Fazemos tudo relacionado à Transportes!' text={['Na Lider Fast Courier, oferecemos uma ampla gama de serviços de transporte rápidos e eficientes, incluindo entregas e fretes, para atender às suas necessidades. Desde entregas expressas até transportes especializados, nossa equipe está pronta para garantir que suas encomendas e cargas cheguem ao destino com segurança e pontualidade. Com um compromisso firme com a excelência, cuidamos de todo o processo logístico, proporcionando uma experiência de transporte confiável e sem complicações.']}/>
          <CardServices />
          <Carrossel />
          <MailSender />
          <Footer />
        </>
      )
      )
      }
      <FixedWppButton />
    </styled.InitialPage>
  );
}

export default App;
