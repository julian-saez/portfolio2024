import StatusBar from '../StatusBar/StatusBar';
import VectorsInPresentation from '../vectors/VectorsInPresentation';
import styles from './Presentation.module.css';

const Presentation = () => {
    return(
        <section className={ styles.presentation_section }>
            <h1>Julian Saez is a <span className="highlighted-words">front-end developer</span></h1>
            <p className={ styles.presentation_text }>He turns his clients' designs and dreams into reality.</p>
            <VectorsInPresentation />
            <StatusBar />
        </section>
    );
}

export default Presentation;
