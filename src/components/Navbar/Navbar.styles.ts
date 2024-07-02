import React from "react";
import styled from 'styled-components';
import colors from '../../styles.colors';

export const Navbar = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.black};
    div{
        padding-left: 2vw;
        img{
            width: 70px;
        }
    }
    .itens-menu{
        justify-content: space-between;
        ul{
        display: inline-flex;
        li{
            cursor: pointer;
            position: relative;
            border-bottom: 1px solid ${colors.black};
            h4{
                color: ${colors.white};
            }
            &:hover{
                border-bottom: 1px solid ${colors.white};
            }
            &:not(:last-child)::after {
                content: ''; 
                position: absolute;
                right: 0px; 
                top: 50%; 
                transform: translateY(-50%);
                width: 1px;
                height: 20px; 
                background-color: ${colors.white};
            }
            a{
                text-decoration: none;
                color: ${colors.black};
            }
            padding: 15px;
            list-style: none;
        }
        }
    }
    .contato{
        padding-right: 2vw;
        color: ${colors.white};
    }
    .menu-bars {
        display: none;
    }


    @media (max-width: 820px) {
        height: auto;
        display: block;
        position: fixed;
        z-index: 99;
        .small-nav{
            display: flex;
            justify-content: space-between;
            div{
                img{
                    padding-top: 1vh;
                    padding-bottom: 1vh;
                    padding-left: 1vw;
                }
            }
            .menu-bars {
                padding-top: 2vh;
                padding-bottom: 2vh;
                padding-right: 2vw;
                display: flex;
                cursor: pointer;
                svg{
                    font-size: 30px;
                    fill: ${colors.white};
                }
            }
        }
        .itens-menu{
            padding-left: 0;
            z-index: 999;
            ul{
                z-index: 999;
                background-color: ${colors.black};
                position: absolute;
                width: 100%;
                padding: 0;
                display: block;
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                &.off {
                    animation: collapseMenu 0.5s backwards;
                }

                &.active {
                    animation: expandMenu 0.5s forwards;
                }
                li{
                    h4{
                        color: ${colors.white};
                    }
                    cursor: pointer;
                    &:first-of-type{
                        border-top: 1px solid ${colors.black};
                    }
                    border-bottom: 1px solid ${colors.black};
                    &:not(:last-child)::after {
                        content: none; 
                    }
                    &:hover{
                        background-color: ${colors.white};
                        h4{
                            color: ${colors.black};
                        }
                    }
                }
            }
        }
        .contato{
            display: none;
        }

    }
    @keyframes expandMenu {
        from {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }

    @keyframes collapseMenu {
        from {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        to {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
    }
`;