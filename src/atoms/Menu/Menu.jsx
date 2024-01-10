import MenuButton from './MenuButton/MenuButton';
import styles from './Menu.module.css';
import { useState } from 'react';

const Menu = ({ children }) => {
    const [ activeClass, setActiveClass ] = useState(false);

    const handleChange = () => {
        setActiveClass( !activeClass );
        console.log( activeClass )
    };

    return(
        <nav className={ styles.nav }>
            <MenuButton handleChange={ handleChange }></MenuButton>
            <ol className={ activeClass ? styles.active_menu : styles.disable_menu }>
                { children }
            </ol>
        </nav>
    );
}

export default Menu;
