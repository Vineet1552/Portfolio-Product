import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="container3">
        <div id="aboutHeadingContainer">
          <h1 id="aboutHeading">About Me</h1>
          <div className="line"></div>
        </div>
        <div id="content">
          I am <span id="contentName">Vineet</span>, I am a passionate software
          developer with 6 months of experience in building web applications.
        </div>
        <h2 id="education">Education</h2>
        <div id="educationContent">
          <h3 id="UniversityName">Chandigarh University</h3>
          <div className="edu-details">
            <li id="edu-maincontent">
              Bachelor of Engineering in Computer Science
            </li>
            <span className="edu-percentage">85%</span>
          </div>
          <div id="educationyeardiv">
            <p id="educationyear">2020-2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};
