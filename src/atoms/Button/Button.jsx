import styles from './Button.module.css';

const PrimaryButton = ({ text, onClick }) => {
    return(
        <button className={ styles.primary_button } onClick={ onClick }>{ text }</button>
    )
};

export default PrimaryButton;
