import styles from './Contact.module.css';
import DiscordIcon from './../../../../atoms/icons/DiscordIcon';
import EmailIcon from './../../../../atoms/icons/EmailIcon';
import CopyToClipboard from '../../../../atoms/CopyToClipboard/CopyToClipboard';
import './../../home.css'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return(
        <section id='contact' className={ styles.contact_section }>
            <div ref={ ref } className='header_section'>
                <h2><span className='highlighted-words'>#</span>contact</h2>
                <div className='division_line_section line_sm'></div>
            </div>
            <div className={ styles.contact_content_container }>
                <p className={`${ styles.contact_text_description } ${ inView && 'animate__animated animate__fadeInUp' }`}>I am interested in new job offers. If you have a question, don’t hesitate to contact me.</p>
                <div className={` ${styles.box_contact_options} ${ inView && 'animate__animated animate__zoomIn' }`}>
                    <span className={ styles.box_contact_title }>Message me here</span>
                    <div className={ styles.contact_ds_item }>
                        <DiscordIcon />
                        <span>oblakk</span>
                        <div className={ styles.copy_to_clipboard }>
                            <CopyToClipboard copyText='oblakk' />
                        </div>
                    </div>
                    <div className={ styles.contact_e_item }>
                        <EmailIcon />
                        <span>saezjuliann@gmail.com</span>
                        <div className={ styles.copy_to_clipboard }>
                            <CopyToClipboard copyText='saezjuliann@gmail.com' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
