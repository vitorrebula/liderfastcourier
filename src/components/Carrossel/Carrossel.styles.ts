import styled from 'styled-components';
import colors from '../../styles.colors';

export const Container = styled.div`
    background-color: ${colors.cinzaclaro};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100%;

    .carrossel {
        width: 100%;
        margin: 0 auto;
        max-width: 900px;
        margin-left: 2vw;
        margin-right: 2vw;

        .carousel-content {
            display: flex;
            justify-content: center;

            img {
                width: 100%;
                height: auto;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    @media (max-width: 768px) {
        .carrossel {
        }
        padding-top: 4vh;
        padding-bottom: 4vh;
    }

    @media (max-width: 480px) {
        .carrossel {
            .carousel-content {
                img {
                    object-fit: contain;
                }
            }
        }
        padding-top: 2vh;
        padding-bottom: 2vh;
    }
`;