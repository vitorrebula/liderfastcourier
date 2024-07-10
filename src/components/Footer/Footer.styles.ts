import styled from 'styled-components';
import colors from '../../styles.colors';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000; 
  color: #fff; 
  border-top: 1px solid #eaeaea;
  height: 30vh;
  @media(max-width: 768px){
    flex-direction: column;
    padding-top: 5vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 35px;
  margin-right: 10px;
  cursor: pointer;
`;

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 25vw;
  @media(max-width: 768px){
    flex-direction: column;
    gap: 5vh;
  }
`;

export const Link = styled.p`
  margin: 0 10px;
  color: ${colors.white}; 
  text-decoration: none;
  cursor: default;
`;

export const LinkImage = styled.div`
  margin: 0 5px;
`;

export const LinkImg = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`;

export const Copyright = styled.div`
  color: #888;
`;
