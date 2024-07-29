// Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



export const Navbar = () => {

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="container">
            <div id="logo">Vineet</div>
            <div id="pages">
                <ul id="pagesUl">
                <li id='pagesUlLi' className={activeSection === 'home' ? 'active' : ''}>Home</li>
                    <li id='pagesUlLi' className={activeSection === 'about' ? 'active' : ''}>About Me</li>
                    <li id='pagesUlLi' className={activeSection === 'experience' ? 'active' : ''}>Experience</li>
                    <li id='pagesUlLi' className={activeSection === 'skills' ? 'active' : ''}>Skills</li>
                    <li id='pagesUlLi' className={activeSection === 'projects' ? 'active' : ''}>Projects</li>
                    <li id='pagesUlLi' className={activeSection === 'contact' ? 'active' : ''}>Get In Touch</li>
                </ul>
            </div>
            <div id="linksLogo">
                <ul id="linksLogoUl">
                    <li id='linksLogoUlLi'><a href="https://www.linkedin.com/in/vineet-verma-a1a92622a/" target="_blank" className="custom-link"><FontAwesomeIcon icon={faLinkedin} className="fa-icon"/></a></li>
                    <li id='linksLogoUlLi'><a href="https://github.com/Vineet1552" target='_blank' className='custom-link'><FontAwesomeIcon icon={faGithub} className="fa-icon"/></a></li>
                    <li id='linksLogoUlLi'><a href="https://x.com/?lang=en" target='_blank' className='custom-link'><FontAwesomeIcon icon={faSquareTwitter} className="fa-icon"/></a></li>
                    <li id='linksLogoUlLi'><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank' className='custom-link'><FontAwesomeIcon icon={faEnvelope} className="fa-icon"/></a></li>
                </ul>
            </div>
        </div>
    )
};