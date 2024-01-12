import NotFoundIllustation from '../../assets/NotFound.svg';
import Button from '../../atoms/Button/Button';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return(
        <main>
            <img src={ NotFoundIllustation } alt='Not found illustation' />
            <div className={ styles.text_not_found }>
                <h2>404</h2>
                <p>PAGE NOT FOUND</p>
                <Button text='Home' onClick={ () => navigate('/', { replace: true }) } />
            </div>
        </main>
    )
};

export default NotFound;
