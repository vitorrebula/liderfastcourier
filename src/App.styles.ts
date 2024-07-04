import React from "react";
import styled from 'styled-components';
import colors from "./styles.colors";

export const InitialPage = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    .container{
        max-width: 1500px;
        margin: 0 auto;
    }


    .first {
        padding-top: 4vh;
    }
    @media(max-width: 1200px){
        .first{
            padding-top: 0;
        }
    }
    @media(max-width: 768px){
        .first{
            padding-top: 7vh;
        }
    }
    @media(max-width: 500px){
        .first{
            padding-top: 9vh;
        }
    }
`;