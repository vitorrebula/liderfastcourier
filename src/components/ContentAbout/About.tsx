import React, { useEffect } from "react";
import * as styled from './About.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface About {
    title: string,
    text: string
}

function About(props: About) {
    const { title, text } = props
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <styled.About className="container">
                <h2>{title}</h2>
                <p>{text}</p>
        </styled.About>
    );
};

export default About;