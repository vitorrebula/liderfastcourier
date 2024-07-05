import styled from 'styled-components';
import colors from '../../styles.colors';

export const buttonwpp = styled.div`
    position: fixed;
    bottom: 7%;
    right: 10%;
    z-index: 3;
    svg{
        border-radius: 100%;
        background-color: ${colors.zap};
        padding: 3px;
        width: 50px;
        height: 50px;
        position: fixed;
        fill: ${colors.white};
        animation: pulseIcon 0.6s infinite alternate;
        &:hover{
            fill: ${colors.white};
            background-color: ${colors.black};
        }
    }
    @keyframes pulseIcon {
        from{
            transform: translateY(0) scale(1);
        }
        to{
            transform: translateY(-8px) scale(1.1);
        }
    }
    @media (max-width: 768px) {
        bottom: 5%;
        right: 15%;
        svg {
            width: 40px;
            height: 40px;
        }
    }
`;