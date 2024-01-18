import styles from './SkillsTable.module.css';

const SkillsTable = ({ title, skills }) => {
    return(
        <div className={ styles.skills_table }>
            <div className={ styles.title_skills_container }>
                <span className={ styles.skills_title }>{ title }</span>
            </div>
            <div className={ styles.skills_list }>
                {
                    skills.map(skill => (
                        <span className={ styles.skill_item }>{ skill }</span>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsTable;
