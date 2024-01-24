import styles from './LinkButton.module.css';

const LinkButton = ({ text, to }) => (
    <a className={ styles.link_button } href={ to }>{ text }</a>
);

export default LinkButton;
