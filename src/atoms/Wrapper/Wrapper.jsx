import styles from './Wrapper.module.css';

const Wrapper = ( { children } ) => {
    return(
        <div className={ styles.wrapper }>
            <div className={ styles.centered }>
                { children }
            </div>
        </div>
    )
}

export default Wrapper;
