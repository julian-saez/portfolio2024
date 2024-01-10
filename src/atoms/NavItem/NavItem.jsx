import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = ({ navigateTo, text }) => {
    return(
        <li className={ styles.li }>
            <Link to={ navigateTo }><span className={ styles.hashtag }>#</span>{ text }</Link>
        </li>
    );
};

export default NavItem;
