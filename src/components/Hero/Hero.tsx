import React from "react";
import * as styled from './Hero.styles';

export interface Hero{
    img?: string,
    title: string,
    text: string,
    buttontext: string,
}

function Hero(props: Hero) {

    const { img, title, text, buttontext } = props;

    const goToWhatsApp = () => {
        window.open('https://wa.me/5531999351651?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!%20Pode%20me%20ajudar?', '_blank');
    }

    return (
        <styled.Hero>
            <div className="background-image"><img src={img} alt="truckimg" /></div>
            <div className="text-hero">
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                <div className="wpp-button-hero" onClick={goToWhatsApp}><p>{buttontext}</p></div>
            </div>
            <div className="imglogo"><img src="/logowhite.png" alt="truckimg" /></div>
        </styled.Hero>
    );
};

export default Hero;