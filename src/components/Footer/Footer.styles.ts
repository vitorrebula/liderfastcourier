import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh; 
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

  .VCK {
    color: #fff;
    margin: 0 5px;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: #fff;
    margin: 0 5px;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ffcc00;
    }
  }
`;
