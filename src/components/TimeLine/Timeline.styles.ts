import styled from 'styled-components';
import colors from '../../styles.colors';

export const Title = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    justify-content: center;
    z-index: 1;
    h3{
        margin-bottom: 4vh;
        font-size: 2rem;
    }
    div{
        justify-content: center;
        img{
            width: 80px;
        }
    }
    @media(max-width: 800px){
        padding-left: 3vw;
        padding-right: 3vw;
        text-align: center;
    }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const TimelineLine = styled.div`
  position: absolute;
  width: 1px;
  background: #000;
  top: 0;
  bottom: 0;
`;

export const TimelineItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin: ${({ active }) => (active ? '50px 0' : '20px 0')};
  position: relative;
  width: 100%;
  &:hover{
    &:before{
        width: 12px;
        height: 12px;
    }
    }
  
  &::before {
    cursor: pointer;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ active }) => (active ? '#000' : '#fff')};
    border: 2px solid #000;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TimelineYear = styled.div<{ left: boolean }>`
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'right: calc(50% + 20px);' : 'left: calc(50% + 20px);')}
  @media(max-width: 800px){
    font-size: 20px;
    font-weight: 600;
  }
`;

export const TimelineContent = styled.div<{ active: boolean, left: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 350px;
  ${({ left }) => (left ? 'right: calc(50% + 20px);' : 'left: calc(50% + 20px);')}
  @media(max-width: 800px){
    width: 35vw;
  }
  @media(max-width: 460px){
    font-size: 13px;
  }
`;
