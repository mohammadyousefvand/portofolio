import React from "react";
import "./Footer.css";
import { GoMarkGithub } from "react-icons/go";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer flex">
      <a href="http://localhost:3000/" className="footer-link">
        <GoMarkGithub className="footer-icon" />
      </a>
      <a href="http://localhost:3000/" className="footer-link">
        <BsInstagram className="footer-icon" />
      </a>
      <a href="http://localhost:3000/" className="footer-link">
        <BsLinkedin className="footer-icon" />
      </a>
      <a href="http://localhost:3000/" className="footer-link">
        <FiGitlab className="footer-icon" />
      </a>
    </div>
  );
}

export default Footer;
