// ProjectBar.jsx

import './ProjectsBar.css'

// eslint-disable-next-line react/prop-types
export const ProjectsBar = ({projectName, res, image, githubLink}) => {
  return (
    <>
    <div className="projectDetails">
      <div id="projectLeft">
        <img src={image} alt="project image" id='imgProject'/>
      </div>
      <div id="projectRight">
        <h2>{projectName}</h2>
        <ul>
          
          {/* eslint-disable-next-line react/prop-types */}
          {res.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
        <div id="but-github"> 
            <button>
              <a href={githubLink} target='_blank' id='project-Link-but'>GitHub</a>
            </button>
          </div>
      </div>
    </div>
    </>
  )
}

