import Button from '../Button/Button';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ isDeployed, demoUrl, url, cover, teconologies, title, description }) => {
    const navigateTo = () => {
        let urlDef = isDeployed ? url : demoUrl;
        window.open(urlDef);
    };

    return(
        <div className={ styles.project_card }>
            <img src={ cover } alt={ title } />
            <div className={ styles.tecnologies_project_card }>{ teconologies }</div>
            <div>
                <span className={ styles.project_card_title }>{ title }</span>
                <p className={ styles.project_card_description }>{ description }</p>
                <div className={ styles.button_container_pc }>
                    {
                        isDeployed
                        ? <Button onClick={ navigateTo } text='Live' />
                        : <Button onClick={ navigateTo } text='Demo' />
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
