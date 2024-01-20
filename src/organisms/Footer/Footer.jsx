import { Link } from 'react-router-dom';
import GithubIcon from './../../atoms/icons/LinkedInIcon';
import LinkedInIcon from '../../atoms/icons/GithubIcon';
import styles from './Footer.module.css';

const Footer = () => {
    const date = new Date();
    return(
        <footer id='footer' className={ styles.footer }>
            <div className={ styles.footer_content }>
                <div className={ styles.footer_bio_container }>
                    <span>Julian</span>
                    <p>Front-end Developer</p>
                </div>
                <div className={ styles.footer_media_container }>
                    <h3>Media</h3>
                    <Link to='https://github.com/julian-saez'>
                        <GithubIcon fill="#ABB2BF" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/julian-saez-b913281b5/">
                        <LinkedInIcon fill="#ABB2BF" />
                    </Link>
                </div>
            </div>
            <div className={ styles.copyright }>
                <span>© Copyright { date.getFullYear() }. Made by Julian.</span>
            </div>
        </footer>
    );
}

export default Footer;
