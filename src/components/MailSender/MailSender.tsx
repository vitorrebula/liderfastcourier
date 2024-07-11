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
    const [description, setDescription] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setPhone(formattedValue);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!privacyAccepted) {
            alert('Você precisa aceitar a Política de Privacidade.');
            return;
        }

        emailjs.sendForm('service_yoc8wek', 'template_47dcj0b', e.target as HTMLFormElement, '9NmAaYFH8ixdcYEeM')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email enviado com sucesso!');
                
                setName('');
                setPhone('');
                setDescription('');
                setPrivacyAccepted(false);
            }, (err) => {
                console.log('FAILED...', err);
                alert('Falha ao enviar email.');
            });
    };

    return (
        <styled.Container className="container">
            <styled.Title>Entre em contato</styled.Title>
            <styled.Subtitle>Central de Atendimento: <strong>31 98306-3573</strong></styled.Subtitle>
            <styled.Form id="contact-form" onSubmit={handleSubmit}>
                <styled.Input
                    type="text"
                    name="name"
                    placeholder="Nome e Sobrenome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <styled.Input
                    type="tel"
                    name="phone"
                    placeholder="Nº de Telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                />
                <styled.TextArea
                    name="description"
                    placeholder="Mensagem"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                <styled.Button id="button" type="submit">Enviar</styled.Button>
            </styled.Form>
        </styled.Container>
    );
}

export default MailSender;
