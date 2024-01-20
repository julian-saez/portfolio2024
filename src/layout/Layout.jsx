import NavBar from '../organisms/NavBar/NavBar';
import Wrapper from '../atoms/Wrapper/Wrapper';
import Footer from '../organisms/Footer/Footer';

const Layout = ({ children }) => {
    return(
        <Wrapper>
            <NavBar />
            { children }
            <Footer />
        </Wrapper>
    );
}

export default Layout;
