import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  const otherServicies = [
    {
      id: 1,
      text: "React and Custom Hooks",
    },
    {
      id: 1,
      text: "Axios",
    },
    {
      id: 1,
      text: "Prettier/Linter",
    },
  ];

  const backEndStack = [
    {
      id: 1,
      text: "NodeJs",
    },
    {
      id: 1,
      text: "TypeScript",
    },
    {
      id: 1,
      text: "Express",
    },
    {
      id: 1,
      text: "TypeORM",
    },
    {
      id: 1,
      text: "MySQL",
    },
    {
      id: 1,
      text: "JWT",
    },
  ];

  const frontEndStack = [
    {
      id: 1,
      text: "NextJs",
    },
    {
      id: 1,
      text: "Ant-Design",
    },
    {
      id: 1,
      text: "styled-components",
    },
    {
      id: 1,
      text: "mobx-state-tree",
    },
    {
      id: 1,
      text: "ContextAPI",
    },
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UX/UI ARTICLE */}
        <article className="service">
          <div className="service__head">
            <h3>State Management</h3>
          </div>

          <ul className="service__list">
            {otherServicies.map((item) => {
              return (
                <li key={item.id}>
                  <BiCheck className="service__list-icon" />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END OF UX/UI ARTICLE */}

        {/* WEB DEVELOPMENT ARTICLE */}
        <article className="service">
          <div className="service__head">
            <h3>BackEnd Stack</h3>
          </div>

          <ul className="service__list">
            {backEndStack.map((item) => {
              return (
                <li key={item.id}>
                  <BiCheck className="service__list-icon" />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT ARTICLE */}

        {/* CONTENT CREATION ARTICLE */}
        <article className="service">
          <div className="service__head">
            <h3>Front End Stack</h3>
          </div>

          <ul className="service__list">
            {frontEndStack.map((item) => {
              return (
                <li key={item.id}>
                  <BiCheck className="service__list-icon" />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END OF CONTENT CREATION ARTICLE */}
      </div>
    </section>
  );
};

export default Services;
