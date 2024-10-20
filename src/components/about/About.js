import React from "react";
import "./about.css";
import Image from "../../assets/lady.svg";
import Resume from "../../assets/Jarawee-JItra-Resume.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img src={Image} alt="" className="about-img" />
        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description">
              I’m Toei, a web developer based in Bangkok, Thailand. I have a
              strong passion for UX/UI design and front-end development. My goal
              is to create user-friendly websites while continually enhancing my
              skills.
            </p>
            <a href={Resume} className="btn">
              Download Resume
            </a>
          </div>
          <div className="about-skills grid">
            <div className="skills-data ">
              <div className="skills-titles">
                <h3 className="skills-name">Development</h3>
                <span className="skills-number ">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage development"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">UX/UI design</h3>
                <span className="skills-number">80%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage ui-design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
