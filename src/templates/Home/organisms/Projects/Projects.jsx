import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import JCPICover from '../../../../assets/JCPIIcover.png';
import CuponstarCover from '../../../../assets/CuponstarCover.png';
import DGCCover from '../../../../assets/DGCCover.png';
import ProjectCard from '../../../../atoms/ProjectCard/ProjectCard';
import '../../home.css';
import { useInView } from 'react-intersection-observer';

const projectsList = [
    {
        cover: CuponstarCover,
        url: 'https://seguros.cuponstar.com/',
        title: 'Cuponstar',
        isDeployed: true,
        demoUrl: '',
        description: 'It is an insurance broker for cars, motorcycles, bicycles, houses, and cell phones.',
        technologies: 'Typescript, SolidJS, Tailwind and Docker'
    },
    {
        cover: DGCCover,
        title: 'DGC',
        isDeployed: true,
        url: 'https://www.digichanges.com/',
        demoUrl: '',
        description: 'It is the website of DigiChanges, a software factory that develops cutting-edge products and provides an end-to-end experience to its clients.',
        technologies: 'Typescript, SolidJS, Tailwind, CSS and Strapi'
    },
    {
        cover: JCPICover,
        title: 'jcp ii',
        isDeployed: true,
        url: 'https://www.jcpii.co.uk/',
        demoUrl: '/',
        description: 'Dedicated to working with other companies to make teamwork more effective and help them grow individually.',
        technologies: 'Typescript, SolidJS, Tailwind and Strapi'
    },
]

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return(
        <section id='projects' className={ styles.projects_section }>
            <div ref={ ref }>
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
            <div className={ `${styles.projects_card_container} ${ inView && 'animate__animated animate__fadeInUp' }` }>
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
