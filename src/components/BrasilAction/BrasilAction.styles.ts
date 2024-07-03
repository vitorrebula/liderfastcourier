import styled from 'styled-components';
import colors from '../../styles.colors';

export const BrasilAction = styled.div`
    width: 100%;
    background-color: ${colors.black};
    height: 100%;
    padding-left: 5vw;
    padding-right: 5vw;
    .brasilcontent{
        padding-top: 10vh;
        padding-bottom: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .imgbrasil{
            width: 120%;
            img{
                width: 100%;
            }
        }
        .brasiltext{
            padding-left: 3vw;
            text-align: start;
            color: ${colors.white};
            h3{
                padding-bottom: 2vh;
                font-size: 3rem;
            }
            p{
                font-size: 2rem;
            }
        }
    }
    @media(max-width: 768px){
        padding-left: 8vw;
        padding-right: 8vw;
        .brasilcontent{
            flex-direction: column-reverse;
            .imgbrasil{
                width: 50%;
            }
            .brasiltext{
                margin-bottom: 5vh;
                text-align: center;
                h3{
                    padding-bottom: 2vh;
                    font-size: 2rem;
                }
                p{
                    font-size: 1.5rem;
                }
            }
        }
    }
`;