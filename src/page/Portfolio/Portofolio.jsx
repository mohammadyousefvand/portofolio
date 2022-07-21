import React from "react";
import "./Portofolio.css";
import ProjectBox from "./ProjectBox/ProjectBox";

function Portofolio() {
  return (
    <div className="portfolio flex w-full p-x">
      <span className="portfolio-title">My Portofolio</span>
      <div className="project-wrapper">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </div>
  );
}

export default Portofolio;
