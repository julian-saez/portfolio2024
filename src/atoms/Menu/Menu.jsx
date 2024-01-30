import MenuButton from './MenuButton/MenuButton';
import styles from './Menu.module.css';
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon';

const Menu = ({ children, isMenuEnabled, handleChange }) => {
    return(
        <nav className={ styles.nav }>
            <MenuButton handleChange={ handleChange } isMenuEnabled={ isMenuEnabled }></MenuButton>
            <ol className={ isMenuEnabled ? styles.active_menu : styles.disable_menu }>
                { children }
                {
                    isMenuEnabled 
                    ?   <div className={ styles.icons_menu }>
                            <div>
                                <a onClick={ handleChange } href="https://www.linkedin.com/in/julian-saez-b913281b5/" target='_blank'><LinkedInIcon fill="#ABB2BF" /></a>
                                <a onClick={ handleChange } href="https://github.com/julian-saez" target='_blank'><GithubIcon fill="#ABB2BF" /></a>
                            </div>
                        </div> 
                    : null
                }
            </ol>
        </nav>
    );
}

export default Menu;
