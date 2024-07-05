import React, { useEffect } from "react";
import * as styled from './BrasilAction.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BrasilAction() {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <styled.BrasilAction>
            <div className="brasilcontent container">
                <div className="imgbrasil"><img src="./brasilmap.png" alt="Mapa do Brasil" data-aos="fade-right"/></div>
                <div className="brasiltext" data-aos="fade-left">
                    <h3>
                        Não importa onde, nós fazemos!
                    </h3>
                    <p>
                    A Lider Fast Courier oferece uma ampla gama de serviços de frete em todo o território nacional, cobrindo todas as necessidades de transporte, exceto mudanças residenciais. Com uma frota versátil e equipe especializada, estamos preparados para atender diversas demandas de logística, garantindo eficiência e segurança em cada entrega.
                    </p>
                </div>
            </div>
        </styled.BrasilAction>
    );
};

export default BrasilAction;