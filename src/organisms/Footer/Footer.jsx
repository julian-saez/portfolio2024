import LinkedInIcon from './../../atoms/icons/LinkedInIcon';
import GithubIcon from '../../atoms/icons/GithubIcon';
import styles from './Footer.module.css';

const Footer = () => {
    const date = new Date();
    const navigateTo = (url) => {
        window.open(url);
    };
    return(
        <footer id='footer' className={ styles.footer }>
            <div className={ styles.footer_content }>
                <div className={ styles.footer_bio_container }>
                    <span>Julian</span>
                    <p>Front-end Developer</p>
                </div>
                <div className={ styles.footer_media_container }>
                    <h3>Media</h3>
                    <a href='https://www.linkedin.com/in/julian-saez-b913281b5/' target='_blank'>
                        <LinkedInIcon fill="#ABB2BF" />
                    </a>
                    <a href='https://github.com/julian-saez' target='_blank'>
                        <GithubIcon fill="#ABB2BF" />
                    </a>
                </div>
            </div>
            <div className={ styles.copyright }>
                <span>© Copyright { date.getFullYear() }. Made by Julian.</span>
            </div>
        </footer>
    );
}

export default Footer;
