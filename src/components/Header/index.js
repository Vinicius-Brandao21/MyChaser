import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import imgCapa from './logo.png';
import HeaderLink from 'components/HeaderLink';
import Hamburguer from 'components/Hamburguer';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={imgCapa} alt='Imagem Header do Grand Chase'></img>
            </Link>
            <nav>
                <HeaderLink url='./'>
                    Home
                </HeaderLink>
                <HeaderLink url='./Sobre'>
                    Sobre
                </HeaderLink>
                <HeaderLink url='./'>
                    MyChaser
                </HeaderLink>
                <Hamburguer />
            </nav>
        </header>
    )
}

export default Header