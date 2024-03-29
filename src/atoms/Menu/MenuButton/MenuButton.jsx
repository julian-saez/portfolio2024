import styles from './MenuButton.module.css';

const MenuButton = ( { handleChange, isMenuEnabled } ) => (
    <div className={ styles.demo }>
        <div className={ styles.menu_icon }>
            <input className={ styles.menu_icon__cheeckbox } checked={ isMenuEnabled } onChange={ handleChange } type="checkbox" />
            <div className={ styles.lines_container }>
                <span className={ styles.line }></span>
                <span className={ styles.line }></span>
            </div>
        </div>
    </div>
);

export default MenuButton;
