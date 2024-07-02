import styled from 'styled-components';
import colors from '../../styles.colors';

export const Hero = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        filter: grayscale(10%) brightness(70%);
        z-index: -1;
        img {
            width: 100vw;
            height: 100%;
        }
    }

    .imglogo {
        display: flex;
        justify-content: center;
        margin-top: 5%;
        margin-bottom: 5%;
        box-sizing: border-box;
        img {
            width: 80%;
        }
    }

    .text-hero {
        padding-left: 5vw;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        align-items: left;
        text-align: left;

        h2, p {
            color: ${colors.white};
            font-size: 3em;
        }

        p {
            margin-top: 30px;
            font-size: 1.5em;
            font-weight: normal;
            max-width: 60vw;
        }

        .wpp-button-hero {
        background-color: ${colors.orange};
        width: fit-content;
        height: 100%;
        margin-top: 20px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        p{
            margin: 0;
            color: ${colors.black};
            font-weight: bold;
            font-size: 1.1em;
            padding: 10px;
            text-shadow: none;
        }
        &:hover{
            background-color: ${colors.black};
            p{
                color: ${colors.orange};
            }
        }
    }
    }

    @media (max-width: 820px) {
        margin-top: 15vh;
        min-height: 30vh;
       .text-hero{
            h2, p {
                color: ${colors.white};
                font-size: 1.5em;
            }
            h2{
                margin-top: 10px;
            }
            p {
                margin-top: 10px;
                font-size: 0.75em;
                font-weight: normal;
                max-width: 75vw;
            }
            .wpp-button-hero {
                height: min-content;
                margin-bottom: 10px;
                p{
                    font-size: small;
                    padding: 7px;
                }
            }
        } 
    }
    .imglogo {
        margin-top: 10%;
        margin-bottom: 10%;
        img {
            width: 60%;
        }
    }

`;