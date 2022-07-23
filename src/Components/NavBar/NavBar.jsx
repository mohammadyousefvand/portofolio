import React from "react";
import "./NavBar.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <div className="navBar-wrapper">
      <div className="nav">
        <Link
          activeClass="active"
          smooth
          spy
          to="home"
          offset={-60}
          className="navBar-iconBox"
        >
          <AiOutlineHome className="navBar-icon" />
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="about"
          className="navBar-iconBox"
        >
          <AiOutlineUser className="navBar-icon" />
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="skills"
          className="navBar-iconBox"
        >
          <FaLaptopCode className="navBar-icon" />
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="portfolio"
          className="navBar-iconBox"
        >
          <FiMonitor className="navBar-icon" />
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="contact"
          className="navBar-iconBox"
        >
          <AiOutlineMessage className="navBar-icon" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
