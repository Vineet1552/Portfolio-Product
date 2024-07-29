import { SkillBar } from '../../Components/SkillsBar/SkillBar';
import './Skills.css'

export const Skills = () => {
    const skillSet1 = ['VS Code', 'Git', 'GitHub'];
    const skillSet2 = ['JavaScript', 'React', 'Node', 'Express', 'MongooDB'];
    const skillSet3 = ['English', 'Hindi', 'Communication'];
    const skillSet4 = ['Music', 'Reading', 'Trekking'];

    return (
        <section id="skills">
            <div className="container5">
            <div id='aboutHeadingContainer'>
                <h1 id='aboutHeading'>Skills</h1>
                <div className="line"></div>
            </div>
            <SkillBar heading="Software Proficiency" skills={skillSet1} />
            <SkillBar heading="Programming & Technical Skills" skills={skillSet2} />
            <SkillBar heading="Language & Soft Skills" skills={skillSet3} />
            <SkillBar heading="Interests & Other Skills" skills={skillSet4} />
        </div>
        </section>
    )
};