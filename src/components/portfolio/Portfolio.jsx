import React from "react";
import "./porfolio.css";
import IMG1 from "../../assets/fotos-proyectos/FOTO2.jpeg";
import IMG2 from "../../assets/fotos-proyectos/ToDo.jpeg";
import IMG3 from "../../assets/fotos-proyectos/CARRITO.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency API Dashboard",
    github: "https://github.com/marcochiaro",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "To Do App",
    github: "https://github.com/marcochiaro/TasksApp",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Shopping Cart App",
    github: "https://github.com/marcochiaro/ShoppingCartApp",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "",
    github: "",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
