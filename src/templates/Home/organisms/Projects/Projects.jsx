import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import CirclesCover from '../../../../assets/CirclesCover.png';
import CuponstarCover from '../../../../assets/CuponstarCover.png';
import DGCCover from '../../../../assets/DGCCover.png';
import ProjectCard from '../../../../atoms/ProjectCard/ProjectCard';
import '../../home.css';

const Projects = () => {
    const projectsList = [
        {
            cover: CuponstarCover,
            url: 'https://seguros.cuponstar.com/',
            title: 'Cuponstar',
            isDeployed: true,
            demoUrl: '',
            description: 'It is an insurance broker for cars, motorcycles, bicycles, houses, and cell phones.',
            technologies: 'Typescript, SolidJS, Tailwind y Docker'
        },
        {
            cover: CirclesCover,
            title: 'Circles',
            isDeployed: false,
            url: '',
            demoUrl: '/',
            description: 'It is a powerful application to optimize your productivity, equipped with task and project management tools.',
            technologies: 'Typescript, ReactJS, CSS3'
        },
        {
            cover: DGCCover,
            title: 'DGC Website',
            isDeployed: true,
            url: 'https://www.digichanges.com/',
            demoUrl: '',
            description: 'It is the website of DigiChanges, a software factory that develops cutting-edge products and provides an end-to-end experience to its clients.',
            technologies: 'Typescript, SolidJS, Tailwind y Strapi'
        }
    ]
    return(
        <section id='projects' className={ styles.projects_section }>
            <div>
                <div className='header_section'>
                    <h2><span className='highlighted-words'>#</span>projects</h2>
                    <div className='division_line_section line_md'></div>
                </div>
                {/* TODO: Descomentar este fragmento cuando tengamos lista la pagina de works */}
                {/* <div className={ styles.view_all_projects }>
                    <Link to='projects'>
                        View all
                    </Link>
                </div> */}
            </div>
            <div className={ styles.projects_card_container }>
                {
                    projectsList.map(el => (
                        <ProjectCard isDeployed={ el.isDeployed } demoUrl={ el.demoUrl } url={ el.url } cover={ el.cover } title={ el.title } teconologies={ el.technologies } description={ el.description } />
                    ))
                }
            </div>

            {/* TODO: Descomentar este fragmento cuando tengamos lista la pagina de works */}
            {/* <div className={ styles.view_all_btn_pc_mobile }>
                    <Link to='projects'>
                        View all
                    </Link>
            </div> */}
        </section>
    );
}

export default Projects;
