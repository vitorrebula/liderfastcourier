import React from 'react';
import {
    FooterContainer,
    LogoContainer,
    Logo,
    LinksContainer,
    LinksGroup,
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
                <Logo src="./logodourada.png" alt="Nereus Logo" onClick={() => scrollToTop()} />
                <span>Lider Fast Courier</span>
            </LogoContainer>
            <LinksContainer>
                <LinksGroup>
                    <Link>31 2105-6800 - Belo Horizonte - MG</Link>
                    <Link>11 5031-2656 - São Paulo - SP</Link>
                </LinksGroup>
                <LinksGroup>
                    <Link>31 99680-8011 - Priscilla Santos</Link>
                    <Link>31 98301-7768 - Tatiane Guimarães</Link>
                </LinksGroup>
                <LinkImage>
                    <LinkImg onClick={() => goToLink({ link: 'https://www.instagram.com/digitalvck/', type: '_blank' })} src="./VCKLogo.jpg" alt="Fourth Link Image" />
                </LinkImage>
            </LinksContainer>
            <Copyright>© 2024 Lider Fast Courier - All rights reserved.</Copyright>
        </FooterContainer>
    );
};

export default Footer;
