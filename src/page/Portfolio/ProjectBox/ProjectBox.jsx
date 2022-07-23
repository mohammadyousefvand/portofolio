import React from "react";
import "./ProjectBox.css";
import Button from "../../../Components/Button/Button";

function ProjectBox() {
  return (
    <div className="project-item">
      <div className="project-item-coverBox">
        <img
          className="project-item-cover"
          src="image/Screenshot from 2022-07-01 17-13-40.png"
          alt=""
        />
      </div>
      <div className="project-description">
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="project-item-btnBox flex">
        <Button content="Github" width="100px" />
        <Button content="Live demo" width="160px" />
      </div>
    </div>
  );
}

export default ProjectBox;
