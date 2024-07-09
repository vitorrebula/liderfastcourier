import React, { useState, useEffect } from "react";
import * as styled from './Timeline.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init();
    }, []);

    const events = [
        { year: 2000, content: 'Criação da Lider Fast Courier!' },
        { year: 2002, content: 'Primeiro cliente de outro Estado.' },
        { year: 2005, content: 'Primeira contrato de transporte!' },
        { year: 2007, content: 'Inauguração da Nova sede de SP.' },
        { year: 2009, content: 'Batemos a marca de 10.000 entregas!' },
        { year: 2018, content: 'Batemos a marca de 50.000 entregas!' },
        { year: 2023, content: 'Batemos a marca de 100.000 entregas!' },
    ];

    const marcaBolinha = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <styled.TimelineContainer>
            <styled.Title>
                <h3>Conheça a Nossa História!</h3>
                <div><img src="logodourada.png" alt="Lider Fast Courier" /></div>
            </styled.Title>
            <styled.TimelineLine />
            {events.map((event, index) => (
                <styled.TimelineItem key={index} active={index === activeIndex} onClick={() => marcaBolinha(index)}>
                    <styled.TimelineYear left={index % 2 !== 0}>{event.year}</styled.TimelineYear>
                    <styled.TimelineContent active={index === activeIndex} left={index % 2 === 0}>
                        {event.content}
                    </styled.TimelineContent>
                </styled.TimelineItem>
            ))}
        </styled.TimelineContainer>
    );
};

export default Timeline;
