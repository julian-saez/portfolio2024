import styles from './ScrollArrowDown.module.css';

const ScrollArrowDown = () => {
    return(
        <div className={ styles.arrows }>
            <div class={`${styles.arrow} ${styles.arrow_first}`}></div>
            <div class={`${styles.arrow} ${styles.arrow_second}`}></div>
        </div>
    )
};

export default ScrollArrowDown;
