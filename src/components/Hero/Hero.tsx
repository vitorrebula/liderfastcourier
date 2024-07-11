import React from "react";
import * as styled from './Hero.styles';

export interface Hero {
    backimg: string,
    title: string,
    text: string,
    buttontext: string,
    img: string,
    page: number,
}

function Hero(props: Hero) {
    const { backimg, img, title, text, buttontext, page } = props;

    const links = ["https://wa.me/5531996808011?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!%20Pode%20me%20ajudar?", "https://wa.me/5531983017768?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!%20Pode%20me%20ajudar?"];

    const goToWhatsApp = () => {
        const randomIndex = Math.floor(Math.random() * links.length);
        const redirectLink = links[randomIndex];

        window.open(redirectLink, '_blank');
    };

    return (
        <styled.Hero page={page}>
            <div className="background-image"><img src={backimg} alt="truckimg" /></div>
            <div className="text-hero">
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                <div className="wpp-button-hero" onClick={goToWhatsApp}><p>{buttontext}</p></div>
            </div>
            {img ? <div className="imglogo"><img src={img} alt="truckimg" /></div> : null}
        </styled.Hero>
    );
};

export default Hero;