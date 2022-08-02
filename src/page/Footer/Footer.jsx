import React from "react";
import "./Footer.css";
import { GoMarkGithub } from "react-icons/go";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer flex">
      <button onClick={scrollTopHandler} className="move-top flex center">
        <FaArrowUp />
      </button>
      <a href="https://github.com/mohammadyousefvand" className="footer-link">
        <GoMarkGithub className="footer-icon" />
      </a>
      <a
        href="https://www.instagram.com/mohammad_yousefvand_/"
        className="footer-link"
      >
        <BsInstagram className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-yousefvand-a9b045226/"
        className="footer-link"
      >
        <BsLinkedin className="footer-icon" />
      </a>
      <a href="https://gitlab.com/mohammadyousefvand" className="footer-link">
        <FiGitlab className="footer-icon" />
      </a>
    </div>
  );
}

export default Footer;
