import NavBar from "../organisms/NavBar/NavBar";
import styles from './Layout.module.css';

const Layout = () => {
    return(
        <div className={ styles.wrapper }>
            <NavBar />
        </div>
    );
}

export default Layout;
