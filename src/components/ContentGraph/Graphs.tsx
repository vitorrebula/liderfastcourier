import React, { useEffect, useState } from "react";
import * as styled from './Graphs.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Graphs() {
    
    useEffect(() => {
        AOS.init();
    }, []);

    const useTypewriterNumber = (end: number, duration: number) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          let start = 0;
          const increment = end / (duration / 10);
          const handle = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(handle);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 10);
      
          return () => clearInterval(handle);
        }, [end, duration]);
      
        return count;
    };

    const deliveries = useTypewriterNumber(100000, 5000);
    const years = useTypewriterNumber(50, 5000);
    const states = useTypewriterNumber(15, 5000);
    const partners = useTypewriterNumber(15, 5000);
    
    return (
        <styled.Graphs>
            <div className="container">
                <img src="./graph.jpg"/>
                <div className="data">
                    <h3 className="general-title">A Líder Fast em números</h3>
                    <div className="metrics-container">
                        <div className="upper" data-aos="fade-up" data-aos-duration="900">
                            <p>Entregas Realizadas</p>
                            <h5>+{deliveries}</h5>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700">
                            <p>Anos de Empresa</p>
                            <h5>+{years}</h5>
                        </div>                
                        <div className="upper" data-aos="fade-up" data-aos-duration="500">
                            <p>Estados Atendidos</p>
                            <h5>+{states}</h5>
                        </div>                
                        <div data-aos="fade-up" data-aos-duration="300">
                            <p>Empresas Parceiras</p>
                            <h5>+{partners}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </styled.Graphs>
    );
};

export default Graphs;