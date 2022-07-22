import React from "react";
import "./NavBar.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

function NavBar() {
  return (
    <div className="navBar-wrapper">
      <div className="nav">
        <a href="#home" className="navBar-iconBox active">
          <AiOutlineHome className="navBar-icon" />
        </a>
        <a href="#about" className="navBar-iconBox">
          <AiOutlineUser className="navBar-icon" />
        </a>
        <a href="#skills" className="navBar-iconBox">
          <FaLaptopCode className="navBar-icon" />
        </a>
        <a href="#portfolio" className="navBar-iconBox">
          <FiMonitor className="navBar-icon" />
        </a>
        <a href="#portfolio" className="navBar-iconBox">
          <AiOutlineMessage className="navBar-icon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
