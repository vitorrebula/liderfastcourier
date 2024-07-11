import React from "react";
import * as styled from './FixedWppButton.styles';
import { WhatsAppOutlined } from '@ant-design/icons';

function FixedWppButton() {
    const links = ["https://wa.me/5531996808011?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!%20Pode%20me%20ajudar?", "https://wa.me/5531983017768?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!%20Pode%20me%20ajudar?"];

    const goToWhatsApp = () => {
        const randomIndex = Math.floor(Math.random() * links.length);
        const redirectLink = links[randomIndex];

        window.open(redirectLink, '_blank');
    };

    return (
        <styled.buttonwpp>
            <WhatsAppOutlined onClick={goToWhatsApp}/>
        </styled.buttonwpp>
    );
};

export default FixedWppButton;