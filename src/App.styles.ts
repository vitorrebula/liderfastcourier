import React from "react";
import styled from 'styled-components';
import colors from "../src/styles.colors";

export const InitialPage = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        background: ${colors.orange};
        border-radius: 10px;
    }
    .container{
        max-width: 1130px;
        margin: 0 auto;
    }
`;