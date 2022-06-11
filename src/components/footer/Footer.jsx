import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrSoundcloud } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Marco Chiaro
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://soundcloud.com">
          <GrSoundcloud />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Marco Chiaro Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
