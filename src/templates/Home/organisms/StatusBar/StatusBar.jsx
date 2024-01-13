import styles from './StatusBar.module.css';

const StatusBar = () => {
    return(
        <div className={ styles.status_bar }>
            <div className={ styles.solid_pink_square }></div>
            <p>Currently working on <span className={ styles.highlighted_white_word }>Circles</span></p>
        </div>
    );
}

export default StatusBar;
