import styles from './Skills.module.css';
import '../../home.css';
import Cube from '../../../../atoms/vectors/Cube';
import Square from '../../../../atoms/vectors/Square';
import DotsSquare from '../../../../atoms/vectors/DotsSquare';
import SkillsTable from '../../../../atoms/SkillsTable/SkillsTable';

const Skills = () => {
    const languagesList = ['Javascript', 'Typescript', 'Dart', 'C#'];
    const databasesList = ['MongoDB', 'PostgreSQL'];
    const toolsList = ['VSC', 'PHPStorm', 'Git', 'GitHub', 'Android Studio', 'Figma', 'YouTrack', 'Notion'];
    const otherList = ['HTML', 'CSS', 'SCSS', 'Tailwind', 'Docker', 'NodeJS'];
    const frameworksList = ['ReactJS', 'SolidJS', 'Flutter'];
    return(
        <section id='skills' className={ styles.skills_section }>
            <div className='header_section'>
                <h2><span className='highlighted-words'>#</span>skills</h2>
                <div className='division_line_section line_sm'></div>
            </div>
            <div className={ styles.vectors_in_skills_section }>
                <div className={ styles.v_skills_cube }>
                    <Cube />
                </div>
                <div className={ styles.v_skills_square }>
                    <Square />
                </div>
                <div className={ styles.v_skills_dots_square_1 }>
                    <DotsSquare />
                </div>
                <div className={ styles.v_skills_dots_square_2 }>
                    <DotsSquare />
                </div>
                <div className={ styles.v_skills_square_2 }>
                    <Square />
                </div>
            </div>

            <div className={ styles.skills_list }>
                <div>
                    <SkillsTable title='Languages' skills={ languagesList } />
                </div>
                <div>
                    <SkillsTable title='Frameworks' skills={ frameworksList } />
                    <SkillsTable title='Other' skills={ otherList } />
                </div>
                <div>
                    <SkillsTable title='Tools' skills={ toolsList } />
                    <SkillsTable title='Databases' skills={ databasesList } />
                </div>
            </div>
        </section>
    );
}

export default Skills;
