import styles from './NavBar.module.css';
import NavItem from '../../atoms/NavItem/NavItem';
import Menu from '../../atoms/Menu/Menu';
import { useState } from 'react';

const NavBar = () => {
    const [ isMenuEnabled, setIsMenuEnabled ] = useState(false);

    const handleChange = () => {
        setIsMenuEnabled( !isMenuEnabled );
        console.log(isMenuEnabled)
    };

    return(
        <header className={ styles.header }>
            <div className={ styles.header_content }>
                <span className={ styles.name }>Julian</span>
                <Menu handleChange={ handleChange } isMenuEnabled={ isMenuEnabled }>
                    <NavItem onClick={ handleChange } navigateTo='#presentation' text='home' />
                    <NavItem onClick={ handleChange } navigateTo='#projects' text='works' />
                    <NavItem onClick={ handleChange } navigateTo='#about-me' text='about-me' />
                    <NavItem onClick={ handleChange } navigateTo='#contact' text='contact' />
                </Menu>
            </div>
        </header>
    )
}

export default NavBar;
