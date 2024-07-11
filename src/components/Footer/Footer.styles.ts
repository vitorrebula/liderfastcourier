import styled from 'styled-components';
import colors from '../../styles.colors';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  background-color: #000; 
  color: #fff; 
  border-top: 1px solid #eaeaea;
  font-size: 0.7rem;
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
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  filter: brightness(1.5);
`;

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  @media(max-width: 768px){
    flex-direction: column;
    gap: 2vh;
    margin-bottom: 2vh;
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  @media(max-width: 768px){
    align-items: center;
  }
`;

export const Link = styled.p`
  margin: 5px 0;
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
  @media(max-width: 768px){
    margin-top: 5vh;
  }
`;
