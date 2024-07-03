import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/ContentAbout'
import { Graphs } from './components/ContentGraph';
import { Diferentials } from './components/Diferentials';
import { BrasilAction } from './components/BrasilAction';

import { FixedWppButton } from './components/FixedWppButton';
import './App.css';
import * as styled from './App.styles'

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
          <About />
          <Graphs />
          <Diferentials />
          <BrasilAction />
          <FixedWppButton />
        </>
      ) : (
        <>
        </>
      )}
    </styled.InitialPage>
  );
}

export default App;
