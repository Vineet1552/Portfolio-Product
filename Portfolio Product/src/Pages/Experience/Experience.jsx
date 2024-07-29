import { CompanyRole } from "../../Components/CompanyName/CompanyRole";
import "./Experience.css";

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container4">
        <div id="aboutHeadingContainer">
          <h1 id="aboutHeading">Experience</h1>
          <div className="line"></div>
        </div>
        <CompanyRole
          company="Apptunix"
          role="MERN stack intern"
          year="Jan-2024 to Apr-2024"
          responsibilities={[
            "Developing responsive and user-friendly web applications using React.js and Node.js",
            "Collaborating with the team to understand project requirements and translating them into technical solutions efficiently",
            "Ensuring the performance, scalability, and security of applications through effective coding practices and optimization techniques",
          ]}
        />
        <CompanyRole
          company="StepUp Heping Hands"
          role="WordPress intern"
          year="Mar-2022 to jun-2022"
          responsibilities={[
            "Expertly designing websites leveraging the WordPress platform, ensuring aesthetic appeal and user experience.",
            "Skillfully integrating and configuring diverse plugins to enhance website functionality, tailoring solutions to meet specific client needs",
            "Employing best practices in WordPress development to ensure scalability, security, and performance of websites",
          ]}
        />
      </div>
    </section>
  );
};
