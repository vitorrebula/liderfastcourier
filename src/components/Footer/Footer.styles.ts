import colors from '../../styles.colors';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #000;
  color: #fff;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    margin: 0 0.5rem;
    font-size: 1.5rem;
    color: #fff;

    &:hover {
      color: ${colors.orange};
    }
  }
`;

export const Copyright = styled.div`
  font-size: 0.875rem;
`;
