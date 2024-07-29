// MainBar.jsx
import "./MainBar.css";
import img from "../../../assests/main1.png";

export const MainBar = () => {
  return (
    <div>
      <section id="home">
        <div className="container1">
          <div id="contentSide1">
            Hi, I am <span id="name">Vineet</span> a <br />{" "}
            <span id="passionate">passionate</span> Software{" "}
            <span id="role">Developer</span>
            <p id="slide-in-text">Stick around to see some of my work.</p>
            <button id="hireMe">Hire Me</button>
            <button id="DownloadCV">Download CV</button>
          </div>
          <div id="contentSide2">
              <img src={img} alt="Profile" className="sparkle-border" />
          </div>
        </div>
      </section>
    </div>
  );
};

{
  /* <p>i am a software developer, transforming visions into seamless user experience</p> */
}
