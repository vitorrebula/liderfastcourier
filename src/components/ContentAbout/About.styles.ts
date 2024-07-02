import styled from 'styled-components';
import colors from '../../styles.colors';

export const About = styled.div`
  height: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh !important;
  margin-bottom: 10vh !important;
  padding-left: 5vw !important;
  padding-right: 5vw !important;
  text-align: center;
    h2{
        font-weight: bold;
        padding-bottom: 5vh;
        font-size: 3em;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }
    p{
        font-weight: 350;
        font-size: 22px;
    }
    @media(max-width: 768px){
        margin-top: 5vh !important;
        margin-bottom: 5vh !important;
        h2{
            font-size: 1.5em;
            padding-bottom: 3vh;
        }
        p{
            font-size: 20px;
        }
    }
`;