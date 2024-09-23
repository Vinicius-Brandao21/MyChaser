import React, { useState } from 'react'
import styles from './Hamburguer.module.css';
import MenuHamburguer from 'components/MenuHamburguer';

function Hamburguer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };

    return (
        <div className={styles.Hamburguer}>
            <div>
                <button onClick={toggleMenu}>|||</button>
            </div>
            <MenuHamburguer openMenu={isMenuOpen} closeMenu={toggleMenu} url='/' />
        </div>
    )
}

export default Hamburguer