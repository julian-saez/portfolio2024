import styles from './NavBar.module.css';
import NavItem from '../../atoms/NavItem/NavItem';
import Menu from '../../atoms/Menu/Menu';
import Logo from '../../assets/Logo.svg';
import { useState } from 'react';

const NavBar = () => {
    const [ isMenuEnabled, setIsMenuEnabled ] = useState(false);

    const isCellphone = () => {
        if( window.screen.width < 960 ) {
            return true;
        }
        return false;
    }

    const handleChange = () => {
        setIsMenuEnabled( !isMenuEnabled );
    };

    return(
        <header className={ styles.header }>
            <div className={ styles.header_content }>
                <div className={ styles.brand_container }>
                    <div className={ styles.logo }>
                        <img src={ Logo } />
                    </div>
                    <span className={ styles.name }>Julian</span>
                </div>
                <Menu handleChange={ handleChange } isMenuEnabled={ isMenuEnabled }>
                    <NavItem onClick={ isCellphone() && handleChange } navigateTo='#presentation' text='home' />
                    <NavItem onClick={ isCellphone() && handleChange } navigateTo='#projects' text='works' />
                    <NavItem onClick={ isCellphone() && handleChange } navigateTo='#about-me' text='about-me' />
                    <NavItem onClick={ isCellphone() && handleChange } navigateTo='#contact' text='contact' />
                </Menu>
            </div>
        </header>
    )
}

export default NavBar;
