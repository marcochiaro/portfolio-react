import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  const stateManagament = [
    {
      id: 1,
      text: "ContextAPI",
    },
    {
      id: 1,
      text: "Mobx-state-tree",
    },
    {
      id: 1,
      text: "React Redux",
    },
  ];
  const mainStack = [
    {
      id: 1,
      text: "NextJS",
    },
    {
      id: 1,
      text: "ReactJS",
    },
    {
      id: 1,
      text: "TypeScript",
    },
  ];

  const styling = [
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
      text: "css.modules",
    },
    {
      id: 1,
      text: "Bootstrap",
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
            {stateManagament.map((item) => {
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
            <h3>Main Stack</h3>
          </div>

          <ul className="service__list">
            {mainStack.map((item) => {
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
            <h3>Styles</h3>
          </div>

          <ul className="service__list">
            {styling.map((item) => {
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
