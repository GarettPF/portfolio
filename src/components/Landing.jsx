// import "../dist/styles.css";
// import Waving from "../images/waving.png";
// import Html from "../images/icons/html.svg";
// import Css from "../images/icons/css3.svg";
// import Js from "../images/icons/javascript.svg";
// import React from "../images/icons/react.svg";
// import Tailwind from "../images/icons/tailwind.svg";
// import Sass from "../images/icons/scss.svg";
import Python from '../images/Icons/python.png';
import Java from '../images/Icons/java.png';
import C from '../images/Icons/C.png';
import Cpp from '../images/Icons/cpp.png';
import Js from '../images/Icons/js.png';
import React from '../images/Icons/react.png';

import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Hero() {
  const skillsIcons = [
    {
      img: Python,
      title: "Python",
    },
    {
      img: Java,
      title: "Java",
    },
    {
      img: C,
      title: "C",
    },
    {
      img: Cpp,
      title: "C++",
    },
    {
      img: Js,
      title: "JavaScript",
    },
    {
      img: React,
      title: "React",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Software Developer</h1>
                {/* <img src={Waving} alt="waving_hand" /> */}
                <p>
                  Welcome, I'm Garett Pascual-Folster. An enthusiastic Software Developer
                  based in Honolulu, Hawaii, USA. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/garettpf/"
                  >
                    <FaLinkedin/>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/GarettPF"
                  >
                    <FaGithub/>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
