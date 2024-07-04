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

function App() {
  const [page, setPage] = useState(1);

  return (
    <styled.InitialPage>
      <Navbar setPage={setPage} />
      {page === 1 ? (
        <>
          <Hero
            backimg='./herobg.png'
            img='./logowhite.png'
            title='LIDER FAST COURIER'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis leo eu mi varius pulvinar. Curabitur tincidunt dui nec quam bibendum, ut sodales purus fringilla.'
            buttontext='Faça um orçamento!'
          />
          <About title='Mais de 40 anos como Pioneira no Transporte' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic labore corrupti quos cupiditate vel. Et tempore explicabo placeat neque. Inventore, iure sit vel amet autem enim, sint praesentium in dolor pariatur quibusdam dolores maxime placeat! Vero nesciunt dicta voluptates saepe.' />
          <Graphs />
          <Diferentials />
          <BrasilAction />
          <MailSender />
          <Footer />
        </>
      ) : (page === 2 ? (
        <>
          <div className='first'>
            <About
              title='Quem somos?'
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic labore corrupti quos cupiditate vel. Et tempore explicabo placeat neque. Inventore, iure sit vel amet autem enim, sint praesentium in dolor pariatur quibusdam dolores maxime placeat! Vero nesciunt dicta voluptates saepe.'
            />
          </div>
          <Timeline />
        </>
      ) : (page === 3 ? (
        <>
          <Hero
            backimg='./herobg.png'
            img='logodourada.png'
            title='Nossos Serviços'
            text='Fazemos qualquer tipo de serviço relacionado ao transporte, e contamos com uma experiência de 30 anos de mercado!!'
            buttontext='Saiba mais!'
          />
        </>
      ) : (
        <>
          <Hero
            backimg='./herobg.png'
            img='logodourada.png'
            title='Nossos Clientes'
            text='Nossos clientes são as nossas prioridades!!'
            buttontext='Saiba mais!'
          />
        </>
      )
      )
      )}
      <FixedWppButton />
    </styled.InitialPage>
  );
}

export default App;
