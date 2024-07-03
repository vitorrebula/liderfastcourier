import React, { useState } from "react";
import * as styled from './MailSender.styles';
import emailjs from 'emailjs-com';

function formatPhoneNumber(value: string) {
    const cleaned = value.replace(/\D/g, '');
    
    let formattedValue = '';
    if (cleaned.length >= 1) {
        formattedValue = `(${cleaned.slice(0, 2)}`;
    }
    if (cleaned.length > 2) {
        formattedValue += `) ${cleaned.slice(2, 7)}`;
    }
    if (cleaned.length > 7) {
        formattedValue += `-${cleaned.slice(7, 11)}`;
    }

    return formattedValue;
}

function MailSender() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const handlePhoneChange = (e: { target: { value: string; }; }) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setPhone(formattedValue);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!privacyAccepted) {
            alert('Você precisa aceitar a Política de Privacidade.');
            return;
        }

        const templateParams = {
            name,
            phone,
            email,
        };

        emailjs.send('service_yoc8wek', 'template_47dcj0b', templateParams, '9NmAaYFH8ixdcYEeM')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email enviado com sucesso!');
            }, (err) => {
                console.log('FAILED...', err);
                alert('Falha ao enviar email.');
            });
    };

    return (
        <styled.Container className="container">
            <styled.Title>Entre em contato</styled.Title>
            <styled.Subtitle>Central de Atendimento: <strong>31 98306-3573</strong></styled.Subtitle>
            <styled.Form onSubmit={handleSubmit}>
                <styled.Input
                    type="text"
                    placeholder="Nome e Sobrenome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <styled.Input
                    type="tel"
                    placeholder="Nº de Telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                />
                <styled.Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <styled.CheckboxContainer>
                    <styled.Checkbox
                        type="checkbox"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        required
                    />
                    <label>Aceito que contate-me, usando dos meus dados!</label>
                </styled.CheckboxContainer>
                <styled.Button type="submit">Enviar</styled.Button>
            </styled.Form>
        </styled.Container>
    );
}

export default MailSender;