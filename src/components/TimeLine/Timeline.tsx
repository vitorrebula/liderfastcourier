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
        { year: 2004, content: 'Vitor Rebula nasceu, agraciando o mundo com sua beleza!' },
        { year: 2016, content: 'Vitor vai pro Santa Marcelina, e conhece o Gabriel Cadar.' },
        { year: 2021, content: 'Kaio é apresentado pro Vitor Rebula' },
        { year: 2022, content: 'Depressao' },
        { year: 2023, content: 'Depressao' },
        { year: 2024, content: 'Depressao' },
        { year: 2025, content: 'Depressao' },
        { year: 2026, content: 'Depressao' },
        { year: 2027, content: 'Depressao' },
        { year: 2028, content: 'Depressao' },
        { year: 2029, content: 'Depressao' },
        { year: 2030, content: 'Depressao' },
        { year: 2031, content: 'Depressao' },
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
