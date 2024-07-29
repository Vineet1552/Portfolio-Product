// SkillBar.jsx
import './SkillBar.css'

// eslint-disable-next-line react/prop-types
export const SkillBar = ({heading, skills}) => {
  return (
    <>
    <div className="skillbar">
        <div id="heading">
            {heading}
        </div>
        <div id="skillname">
         {/* eslint-disable-next-line react/prop-types */}
            {skills.map((skills, index) => (
                <li key={index}>{skills}</li>
            ))}
        </div>
    </div>
    </>
  )
}
