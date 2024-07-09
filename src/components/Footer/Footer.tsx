// Footer.tsx
import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';
import { FooterContainer, Logo, SocialIcons, Copyright } from './Footer.styles';

function Footer() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const goToLink = ({ link, type }: { link: string; type: string }) => {
        window.open(link, type);
    }
    return (
        <FooterContainer>
            <Logo>
                <img src="./logodourada.png" alt="VCK" onClick={() => scrollToTop()}/>
                <p>Obrigado por liderar conosco!!</p>
            </Logo>
            <SocialIcons>
                <InstagramOutlined onClick={() => goToLink({link: 'https://www.instagram.com/vitorrebula/', type: '_blank'})}/>
            </SocialIcons>
            <Logo onClick={() => goToLink({link: 'https://www.instagram.com/digitalvck/', type: '_blank'})}>
                <img className='logovck' src="./VCKLogo.jpg" alt="VCK" />
            </Logo>
            <Copyright>
                © 2024 Líder Fast Courier. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
}

export default Footer;
