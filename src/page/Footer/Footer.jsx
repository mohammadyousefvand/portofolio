import React from "react";
import "./Footer.css";
import { GoMarkGithub } from "react-icons/go";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer flex">
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
