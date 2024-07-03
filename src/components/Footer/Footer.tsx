import React from "react";
import * as styled from './Footer.styles';
import { WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons';

function Footer() {

    const goToWhatsApp = () => {
        window.open('https://wa.me/5531999351651?text=Eu%20vim%20pelo%20site%20da%20lider!%20Gostaria%20de%20ajuda%20com%20um%20site%20ou%20marketing!!', '_blank');
    }

    return (
        <styled.FooterContainer>
            <styled.Copyright>
                © Copyright 2024 Líder Fast Courier
            </styled.Copyright>
            <styled.FooterLinks>
                <div className="VCK" onClick={goToWhatsApp}>Uma produção VCK Acessoria.</div>
            </styled.FooterLinks>
            <styled.SocialIcons>
                <a onClick={goToWhatsApp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppOutlined />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined />
                </a>
            </styled.SocialIcons>
        </styled.FooterContainer>
    );
};

export default Footer;