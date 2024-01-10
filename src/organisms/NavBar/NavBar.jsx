import styles from './NavBar.module.css';
import NavItem from '../../atoms/NavItem/NavItem';
import Menu from '../../atoms/Menu/Menu';

const NavBar = () => {
    return(
        <header className={ styles.header }>
            <span className={ styles.name }>Julian</span>
            <Menu>
                <NavItem navigateTo='/' text='home' />
                <NavItem navigateTo='/' text='works' />
                <NavItem navigateTo='/' text='about-me' />
                <NavItem navigateTo='/' text='contact' />
            </Menu>
        </header>
    )
}

export default NavBar;
