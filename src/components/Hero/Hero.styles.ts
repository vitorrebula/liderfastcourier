import styled from 'styled-components';
import colors from '../../styles.colors';

interface HeroProps {
    page: number;
}

export const Hero = styled.div<HeroProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    padding-top: 5vh;

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        filter: grayscale(10%) brightness(50%);
        z-index: -1;
        img {
            object-fit: cover;
            object-position: center;
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
            width: 100%;
            filter: brightness(1.5);
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
            background-color: ${colors.white};
            width: fit-content;
            height: 100%;
            margin-top: 20px;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            p {
                margin: 0;
                color: ${colors.black};
                font-weight: bold;
                font-size: 1.1em;
                padding: 10px;
                text-shadow: none;
            }
            &:hover {
                background-color: ${colors.black};
                p {
                    color: ${colors.white};
                }
            }
        }
    }

    @media (max-width: 820px) {
        padding-top: 12vh;
        min-height: 30vh;
        .text-hero {
            h2, p {
                color: ${colors.white};
                font-size: 1.5em;
            }
            h2 {
                margin-top: 10px;
            }
            p {
                margin-top: 10px;
                font-size: 0.75em;
                font-weight: normal;
                max-width: 100vw;
            }
            .wpp-button-hero {
                height: min-content;
                margin-bottom: 3vh;
                p {
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
            width: 50%;
        }
    }

    ${({ page }) => page === 3 && `
        padding-top: 15vh;
        .imglogo {
            display: flex;
            justify-content: center;
            margin-bottom: 0;
            margin-top: 0;
            box-sizing: border-box;
            img {
                width: 70%;
                filter: none;
            }
        }
        @media (max-width: 820px) {
            padding-top: 12vh;
        }
    `}
`;
