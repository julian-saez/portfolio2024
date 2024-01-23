import { Link } from 'react-router-dom';
import Button from '../../../../atoms/Button/Button';
import ScrollArrowDown from '../../../../atoms/ScrollArrowDown/ScrollArrowDown';
import StatusBar from '../StatusBar/StatusBar';
import VectorsInPresentation from '../Vectors/VectorsInPresentation';
import styles from './Presentation.module.css';

const Presentation = () => {
    return(
        <section id='presentation' className={ styles.presentation_section }>
            <h1 className='animate__animated animate__fadeInUp'>Julian Saez is a <span className='highlighted-words'>front-end developer</span></h1>
            <p className={ `${ styles.presentation_text } animate__animated animate__fadeInUp` }>He turns his clients' designs and dreams into reality.</p>
            <VectorsInPresentation />
            <StatusBar />
            <div className={ `${styles.button_contact_container} animate__animated animate__fadeInDown` }>
                {/* TODO: Pasarle la funcion para contactar */}
                <Button text='Contact me' />
            </div>
            <div className={ styles.arrow_container }>
                <Link to='#projects' className={ styles.arrow_link }>
                    <ScrollArrowDown />
                </Link>
            </div>
        </section>
    );
}

export default Presentation;
