import styled from 'styled-components';
import colors from '../../styles.colors';

interface StyledProps {
  page: number;
}

export const Container = styled.div<StyledProps>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-left: 2vw;
    padding-right: 2vw;
    width: auto;
  }

  ${({ page }) => page === 1 && `
    background-color: ${colors.white};
  `}

  ${({ page }) => page === 2 && `
    background-color: ${colors.cinzaclaro};
  `}
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 4rem;
  margin-top: 10vh;
  font-weight: 700;
  max-width: 500px;
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
  margin-bottom: 10vh;
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
