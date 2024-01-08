import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ text, onClick }) => {
    return(
        <button className={ styles.primary_button } onClick={ onClick }>{ text }</button>
    )
};

export default PrimaryButton;
