import styled from 'styled-components';
import colors from '../../styles.colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  padding-bottom: 1vh;
  font-size: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  padding-bottom: 5vh;
    strong {
        font-weight: bold;
        color: ${colors.orange};
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-left: 10vw;
  padding-right: 10vw;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 2vh;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${colors.orange};
  color: ${colors.black};
  width: 100px;
  margin: 0 auto;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.orange};
  }
`;