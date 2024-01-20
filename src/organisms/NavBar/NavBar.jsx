import styles from './NavBar.module.css';
import NavItem from '../../atoms/NavItem/NavItem';
import Menu from '../../atoms/Menu/Menu';

const NavBar = () => {
    return(
        <header className={ styles.header }>
            <span className={ styles.name }>Julian</span>
            <Menu>
                <NavItem navigateTo='/' text='home' />
                <NavItem navigateTo='#projects' text='works' />
                <NavItem navigateTo='#about-me' text='about-me' />
                <NavItem navigateTo='#contact' text='contact' />
            </Menu>
        </header>
    )
}

export default NavBar;
