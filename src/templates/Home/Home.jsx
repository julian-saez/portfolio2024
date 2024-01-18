import Presentation from '../../templates/Home/organisms/presentation/Presentation';
import Projects from './organisms/Projects/Projects';
import Skills from './organisms/Skills/Skills';
import AboutMe from './organisms/AboutMe/AboutMe';
import './home.css';

const Home = () => {
    return(
        <>
            <Presentation />
            <Projects />
            <Skills />
            <AboutMe />
        </>
    );
}

export default Home;
