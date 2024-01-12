import NavBar from '../organisms/NavBar/NavBar';
import Wrapper from '../atoms/Wrapper/Wrapper';

const Layout = ({ children }) => {
    return(
        <Wrapper>
            <NavBar />
            { children }
        </Wrapper>
    );
}

export default Layout;
