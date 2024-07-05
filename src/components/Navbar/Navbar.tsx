import React, { Dispatch, SetStateAction, useState } from "react";
import * as styled from './Navbar.styles';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export interface Navbar{
    setPage: Dispatch<SetStateAction<number>>
}

function Navbar(props: Navbar) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const {setPage} = props

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    const setPageonNav = (number: number) => {
        setPage(number);
        toggleMenu();
        return;
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <styled.Navbar>
            <div className="small-nav">
                <div onClick={scrollToTop}><img src="/logowhite.png" alt="Logotipo" /></div>
                <div className="menu-bars" onClick={toggleMenu}>
                    {!isMenuOpen ? <MenuOutlined /> : <CloseOutlined />}
                </div>
            </div>
            <div className="itens-menu">
                <ul className={isMenuOpen ? 'active' : 'off'}>
                    <li onClick={() => setPageonNav(1)}><p><h4>HOME</h4></p></li>
                    <li onClick={() => setPageonNav(2)}><p><h4>QUEM SOMOS</h4></p></li>
                    <li onClick={() => setPageonNav(3)}><p><h4>SERVIÇOS</h4></p></li>
                </ul>
            </div>
            <div className="contato">
                <h4>Lorem Inpsum!</h4>
            </div>
        </styled.Navbar>
    );
};

export default Navbar;