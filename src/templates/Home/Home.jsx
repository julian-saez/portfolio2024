import Presentation from '../../templates/Home/organisms/presentation/Presentation';
import Projects from './organisms/Projects/Projects';
import Skills from './organisms/Skills/Skills';
import './home.css';

const Home = () => {
    return(
        <>
            <Presentation />
            <Projects />
            <Skills />
        </>
    );
}

export default Home;
