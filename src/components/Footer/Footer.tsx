import React from 'react';
import {
    FooterContainer,
    LogoContainer,
    Logo,
    LinksContainer,
    Link,
    LinkImage,
    LinkImg,
    Copyright,
} from './Footer.styles';

function Footer() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const goToLink = ({ link, type }: { link: string; type: string }) => {
        window.open(link, type);
    }
    return (
        <FooterContainer>
            <LogoContainer>
                <Logo src="./logodourada.png" alt="Nereus Logo" onClick={() => scrollToTop()}/>
                <span>Lider Fast Courier</span>
            </LogoContainer>
            <LinksContainer>
                <Link>31 2105-6800 - Belo Horizonte - MG</Link>
                <LinkImage>
                    <LinkImg onClick={() => goToLink({link: 'https://www.instagram.com/digitalvck/', type: '_blank'})} src="./VCKLogo.jpg" alt="Fourth Link Image" />
                </LinkImage>
            </LinksContainer>
            <Copyright>© 2024 Lider Fast Courier - All rights reserved.</Copyright>
        </FooterContainer>
    );
};

export default Footer;
