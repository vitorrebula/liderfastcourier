import styled from 'styled-components';
import colors from '../../styles.colors';

export const Graphs = styled.div`
    background-color: ${colors.cinzaclaro};
    padding-left: 4vw;
    padding-right: 3vw;
    padding-top: 10vh;
    padding-bottom: 10vh;
    justify-content: center;
    align-items: center;
    div{
        display: flex;
        flex: 1;
        gap: 10%;
        img{
            width: 48%;
        }
    }

    .data{
        text-align: start;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        margin: auto;

        h3{
            font-size: 2em;
            text-align: start;
            padding-bottom: 10px;
            padding-left: 10px;
        }

        .metrics-container {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            flex-wrap: wrap;
            max-height: 260px;
        }
        
        .upper{
            padding-bottom: 30px;
        }

        div {
            display: flex;
            flex-direction: column;
            min-width: 100px;
        }

        div > p {
            font-weight: 500;
            font-size: 16px;
            padding-bottom: 0;
        }

        div > h5 {
            font-size: 2.5rem;
            font-weight: 500;
            padding-bottom: 0;
        }

    }

    @media(max-width: 940px){
        height: 100%;
        padding-bottom: 10vh !important;
        div{
            display: block !important;
            flex: 0;
            background-color: ${colors.cinzaclaro};
            img{
                display: block;
                margin: 0 auto;
                padding-left: 5vw;
                padding-right: 6vw;
                width: 100%;
            }
        }
        .data{
            height: 100%;
            display: flex;
            background-color: ${colors.cinzaclaro};
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-right: 3vw;
            padding-left: 2vw;
            h3{
            padding-right: 3vw;
            padding-left: 2vw;
            padding-top: 3vh;
            padding-bottom: 3vh;
            text-align: center;
        }
        .upper{
            padding-bottom: 0;
        }
        .metrics-container{
            height: 100%;
            width: 100%;
            div{
                padding-bottom: 2vh;
            }
        }
        }
    }
`;