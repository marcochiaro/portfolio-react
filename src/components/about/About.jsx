import React from "react";
import "./about.css";
import ME from "../../assets/IMG_9834.JPG";
import { FaAward } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Self-Taught Programming</small>
            </article>

            <article className="about__card">
              <GiBookPile className="about__icon" />
              <h5>Education</h5>
              <small>
                Currently in 2nd year of Bachelor of System Analysis at UP
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum
            eum enim laborum ipsum dolor eveniet eos ex. Quia, autem voluptas
            eius doloribus aspernatur aliquid repudiandae a amet recusandae
            adipisci?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
