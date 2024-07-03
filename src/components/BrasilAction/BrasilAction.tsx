import React from "react";
import * as styled from './BrasilAction.styles';

function BrasilAction() {
    
    return (
        <styled.BrasilAction>
            <div className="brasilcontent container">
                <div className="imgbrasil"><img src="./brasilmap.png" alt="Mapa do Brasil" /></div>
                <div className="brasiltext">
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