import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = ({ navigateTo, text, onClick }) => {
    return(
        <li onClick={ onClick } className={ styles.li }>
            <a href={ navigateTo }><span className={ styles.hashtag }>#</span>{ text }</a>
        </li>
    );
};

export default NavItem;
