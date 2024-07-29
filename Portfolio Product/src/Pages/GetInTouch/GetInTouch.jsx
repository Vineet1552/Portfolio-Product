import "./GetInTouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const GetInTouch = () => {
  return (
    <section id="contact">
      <div className="container6">
        <div id="getInTouchHeadingContainer">
          <h1 id="getintouchHeading">Get In Touch</h1>
          <div className="line"></div>
        </div>
        <div className="GetInTouchContent">
          <div id="GetInTouchContentLeft">
            <h1 id="mainHead">Why Be Shy, Say Hi...</h1>
            <p>
              I am open to new opportunities and look forward to connecting with
              you. Whether you have inquiries or just want to say hello, feel
              free to reach out. <br /> I will do my best to respond promptly!
            </p>
            <div id="getInTouchLogo">
              <ul id="getInTouchLogoUl">
                <li id="getInTouchLogoUlLi">
                <a href="https://www.linkedin.com/in/vineet-verma-a1a92622a/" target="_blank" className="custom-link"><FontAwesomeIcon icon={faLinkedin} className="fa-icon"/></a>
                </li>
                <li id="getInTouchLogoUlLi">
                <a href="https://github.com/Vineet1552" target='_blank' className='custom-link'><FontAwesomeIcon icon={faGithub} className="fa-icon"/></a>
                </li>
                <li id="getInTouchLogoUlLi">
                <a href="https://x.com/?lang=en" target='_blank' className='custom-link'><FontAwesomeIcon icon={faSquareTwitter} className="fa-icon"/></a>
                </li>
                <li id="getInTouchLogoUlLi">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank' className='custom-link'><FontAwesomeIcon icon={faEnvelope} className="fa-icon"/></a>
                </li>
              </ul>
            </div>
          </div>
          <div id="GetInTouchContentRight">
            <form id="form">
              <label>
                Name:
                <input type="text" name="name" id="formInput" placeholder="Enter Your Name"/>
              </label>
              <label>
                Email:
                <input type="text" name="name" id="formInput" placeholder="Enter Your Email"/>
              </label>
              <label>
                Message:
                <input type="text" name="name" id="formInputMessage" placeholder="Let's talk about..."/>
              </label>
              <input type="submit" value="Submit" placeholder="send message" id="submitbut"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
