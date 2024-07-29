// Project.jsx

import { ProjectsBar } from "../../Components/ProjectsBar/ProjectsBar";
import p1 from '../../../assests/Portfolio.png'
import p2 from '../../../assests/Backend.png'
import p3 from '../../../assests/Voting.png'

import "./Projects.css";

export const Projects = () => {

  return (
    <section id="projects">
      <div className="container7">
        <div id="projectHeadingContainer">
          <h1 id="projectHeading">Projects</h1>
          <div className="line"></div>
        </div>
        <ProjectsBar projectName="Project 1 - Portfolio website"
          res={[
            "Developed a comprehensive personal portfolio website showcasing my skills, experience, and projects using modern web technologies such as HTML, CSS, and JavaScript.",
            "Implemented dynamic and interactive features including animated text, responsive design, and seamless navigation to enhance user experience and engagement.",
            "Integrated various sections such as About Me, Skills, Experience, and Projects, ensuring a cohesive and professional presentation of my work and achievements.",
          ]}
          image={p1}
          githubLink='https://github.com/Vineet1552/Portfolio-Product'
        />
        <ProjectsBar projectName="Project 2 - Store App Backend"
          res={[
            "Developed a robust backend for a Bookstore Management System using Express.js, Node.js, and MongoDB, ensuring efficient data handling and operations.",
            "Implemented JWT-based authentication and bcrypt-secured passwords to enhance security and protect user data.",
            "Integrated essential tools such as Helmet, dotenv, Agenda, and Swagger for improved security, configuration management, job scheduling, and comprehensive API documentation.",
          ]}
          image={p2}
          githubLink='https://github.com/Vineet1552/Library-App-Backend'
        />
        <ProjectsBar projectName="Project 3 - Voting App Backend"
          res={[
            "Built a secure voting app using Node.js, Express.js, and MongoDB with JWT and bcrypt etc. for authentication",
            "Developed an admin panel for candidate management",
            "Implemented MongoDB for efficient data storage, handling user accounts, voting records, and candidate details, ensuring scalability and reliability",
          ]}
          image={p3}
          githubLink='https://github.com/Vineet1552/Voting-App---backend'
        />
      </div>
    </section>
  );
};
