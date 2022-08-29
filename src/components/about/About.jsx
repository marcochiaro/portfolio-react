import React from "react";
import "./about.css";
import ME from "../../assets/fotos-proyectos/fotito5.jpeg";
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
              <small>2 Years Programming Front and Back End applications</small>
            </article>

            <article className="about__card">
              <GiBookPile className="about__icon" />
              <h5>Education</h5>
              <small>
                Currently in 2nd year of Bachelor of Computer Science at UP
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am a Computer Science student at the University of Palermo,
            currently in the 2nd and before last year. I've been learning for
            about 3 years to develop dynamic applications with libraries and
            frameworks such as ReactJS, NextJs, NodeJs, Typescript, Redux,
            Mobx-state-tree, Express, Mysql, among others. I've carried out many
            dynamic web application projects, such as stores, shopping carts,
            personalized portfolios, Chat app, To Do Apps, REST CRUD APIs, among
            others. On the other hand, I have learned, in the university, the
            basics of programming languages ​​such as Python and SQL. I am very
            interested and excited to start my career in IT, with the main
            purpose of learning, developing my skills as a programmer and being
            able to grow in a company contributing my desire and enthusiasm.
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
