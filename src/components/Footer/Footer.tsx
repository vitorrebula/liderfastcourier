// Footer.tsx
import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';
import { FooterContainer, Logo, SocialIcons, Copyright } from './Footer.styles';

function Footer() {
    
    const goToLink = ({ link, type }: { link: string; type: string }) => {
        window.open(link, type);
    }
    return (
        <FooterContainer>
            <Logo onClick={() => goToLink({link: 'https://www.instagram.com/digitalvck/', type: '_blank'})}>
                <img src="./VCKLogo.jpg" alt="VCK" />
            </Logo>
            <SocialIcons>
                <InstagramOutlined onClick={() => goToLink({link: 'https://www.instagram.com/vitorrebula/', type: '_blank'})}/>
            </SocialIcons>
            <Copyright>
                © 2024 Líder Fast Courier. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
}

export default Footer;
