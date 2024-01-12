import MenuButton from './MenuButton/MenuButton';
import styles from './Menu.module.css';
import { useState } from 'react';
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon';
import { Link } from 'react-router-dom';

const Menu = ({ children }) => {
    const [ isMenuEnabled, setIsMenuEnabled ] = useState(false);

    const handleChange = () => {
        setIsMenuEnabled( !isMenuEnabled );
    };

    return(
        <nav className={ styles.nav }>
            <MenuButton handleChange={ handleChange }></MenuButton>
            <ol className={ isMenuEnabled ? styles.active_menu : styles.disable_menu }>
                { children }
            </ol>
            {
                isMenuEnabled 
                ?   <div className={ styles.icons_menu }>
                        <div>
                            <Link to="https://www.linkedin.com/in/julian-saez-b913281b5/"><LinkedInIcon fill="#ABB2BF" /></Link>
                            <Link to="https://github.com/julian-saez"><GithubIcon fill="#ABB2BF" /></Link>
                        </div>
                    </div> 
                : null
            }
        </nav>
    );
}

export default Menu;
