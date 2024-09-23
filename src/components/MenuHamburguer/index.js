import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuHamburguer.module.css';

function MenuHamburguer({ url, openMenu, closeMenu }) {
    return (

        <div className={styles.hamburguerMenu}>
            <button onClick={closeMenu}>fechar</button>
            <ul>
                <Link to={url} className={styles.link}></Link>
            </ul>
        </div>
    )
}

export default MenuHamburguer