import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  margin-bottom: 15vh;
  margin-top: -5vh;

  @media (max-width: 768px) {
    margin-top: 0vh;
    margin-bottom: 5vh;
    align-items: center;
  }
`;

export const Card = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  @media(max-width: 769px){
    width: 150px;
    height: 250px;
  }

  @media (min-width: 769px) {
    &:hover img {
        filter: grayscale(10%) brightness(70%);
    }

    &:hover div {
      bottom: 0;
    }

    &:hover h3 {
      top: 10px;
    }
  }

  img {
    filter: ${({ isActive }) => (isActive ? 'grayscale(10%) brightness(70%)' : 'none')};
    transition: all 0.3s ease-in-out;
  }

  div {
    bottom: ${({ isActive }) => (isActive ? '0' : '-100%')};
    transition: all 0.3s ease-in-out;
  }

  h3 {
    top: ${({ isActive }) => (isActive ? '10px' : 'calc(100% - 80px)')};
    transition: all 0.3s ease-in-out;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  transition: all 0.3s ease-in-out;
`;

export const CardTitle = styled.h3`
  position: absolute;
  top: calc(100% - 80px);
  left: 0px;
  border-radius: 5px;
  width: calc(100% - 40px);
  margin: 0;
  font-size: 1.5em;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const CardDescription = styled.p`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;
