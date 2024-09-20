import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import imgCapa from './logo.png';
import HeaderLink from 'components/HeaderLink';

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
            </nav>
        </header>
    )
}

export default Header