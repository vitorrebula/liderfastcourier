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
                        Lorem, ipsum.
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium pariatur enim modi quam dignissimos vitae provident ducimus sunt quos, sequi explicabo ut eaque perspiciatis neque aliquam non eos corporis.
                    </p>
                </div>
            </div>
        </styled.BrasilAction>
    );
};

export default BrasilAction;