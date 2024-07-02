import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 80vw;
  margin-top: 10vh !important;
  margin-bottom: 10vh !important;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
  }
`;

export const Item = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  width: 25vw;
  @media (max-width: 768px) {
    width: 60vw;
    margin-bottom: 1rem;
  }
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;