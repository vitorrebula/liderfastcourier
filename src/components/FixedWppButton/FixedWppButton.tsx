import React from "react";
import * as styled from './FixedWppButton.styles';
import { WhatsAppOutlined } from '@ant-design/icons';

function FixedWppButton() {

    const goToWhatsApp = () => {
        window.open('https://wa.me/5531999351651?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!%20Pode%20me%20ajudar?', '_blank');
    }

    return (
        <styled.buttonwpp>
            <WhatsAppOutlined onClick={goToWhatsApp}/>
        </styled.buttonwpp>
    );
};

export default FixedWppButton;