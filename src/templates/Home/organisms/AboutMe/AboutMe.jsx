import '../../home.css';
import styles from './AboutMe.module.css';
import DotsSquare from '../../../../atoms/vectors/DotsSquare';
import DotsRectangle from '../../../../atoms/vectors/DotsRectangle';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return(
        <section id="about-me" className={ styles.about_me_section }>
            <div ref={ ref } className='header_section'>
                <h2><span className='highlighted-words'>#</span>about-me</h2>
                <div className='division_line_section line_md'></div>
            </div>
            <div className={ styles.about_me_content }>
                <p className={ `${ inView && 'animate__animated animate__fadeInUp' }` }>
                    Hello, I'm Julian.<br></br><br></br>
                    
                    I am a front-end developer who enjoys crafting website layouts and collaborating with a team to achieve a functional and high-quality product.<br></br><br></br>

                    Throughout my years of study and my time working as a developer, I learned and implemented Atomic Design to make my projects readable and scalable. Additionally, I was immersed in a highly innovative and continuously learning environment, where I leveraged cutting-edge technologies to achieve enhanced performance and superior outcomes in my work.
                </p>
                <div className={ styles.about_me_v_container }>
                    <div className={ styles.about_me_v_dots_square }>
                        <DotsSquare />
                    </div>
                    <div className={ styles.about_me_v_dots_rectangle }>
                        <DotsRectangle />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
