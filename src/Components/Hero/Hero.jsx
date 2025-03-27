import React from "react";
import "./Hero.css";
import { FaCheck } from "react-icons/fa";
import heroimage from "../../assets/heroimage.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="txt">
          <div className="static-txt">Become a </div>
          <ul className="dynamic-txt">
            <li>
              <span>Software Developer</span>
            </li>
            <li>
              <span>Product Designer</span>
            </li>
            <li>
              <span>Digital Marketer</span>
            </li>
          </ul>
        </div>
        {/* <h1>
          Become a <span>Software Developer</span> in 6 to 12 months
        </h1> */}
        <h5>
          Learn in-demand skills and get connected to jobs in tech in 6 to 12
          months
        </h5>

        <div className="hero-left-items">
          <div className="hero-left-item">
            <div className="check">
              <FaCheck className="mark" />
            </div>
            <p>
              <span>Hands-On Training:</span> Gain practical experience through
              project-based learning.
            </p>
          </div>

          <div className="hero-left-item">
            <div className="check">
              <FaCheck className="mark" />
            </div>
            <p>
              <span>Supportive Community:</span> Join a thriving tech community
              of learners and mentors.
            </p>
          </div>

          <div className="hero-left-item">
            <div className="check">
              <FaCheck className="mark" />
            </div>
            <p>
              <span>Internship Opportunities:</span> Access valuable internship
              experiences.
            </p>
          </div>

          <div className="hero-left-item">
            <div className="check">
              <FaCheck className="mark" />
            </div>
            <p>
              <span>Develop Soft Skills:</span> Master essential communication,
              ethics, and teamwork abilities.
            </p>
          </div>
          <button className="hero-left-cta">Enroll Now</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
