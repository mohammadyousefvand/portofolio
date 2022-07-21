import React from "react";
import "./NavBar.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

function NavBar() {
  return (
    <div className="navBar-wrapper">
      <div className="nav">
        <span className="navBar-iconBox active">
          <AiOutlineHome className="navBar-icon" />
        </span>
        <span className="navBar-iconBox">
          <AiOutlineUser className="navBar-icon" />
        </span>
        <span className="navBar-iconBox">
          <FaLaptopCode className="navBar-icon" />
        </span>
        <span className="navBar-iconBox">
          <FiMonitor className="navBar-icon" />
        </span>
        <span className="navBar-iconBox">
          <AiOutlineMessage className="navBar-icon" />
        </span>
      </div>
    </div>
  );
}

export default NavBar;
