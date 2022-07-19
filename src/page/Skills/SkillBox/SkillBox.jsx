import React from "react";
import "./SkillBox.css";
import ProgressBar from "../../../Components/ProgressBar/ProgressBar";

function SkillBox() {
  return (
    <div className="skill-Box flex">
      <div className="skill-item">
        <span className="skill-title">HTML</span>
        <ProgressBar />
      </div>
      <div className="skill-item">
        <span className="skill-title">CSS</span>
        <ProgressBar />
      </div>
      <div className="skill-item">
        <span className="skill-title">Javascript</span>
        <ProgressBar />
      </div>
      <div className="skill-item">
        <span className="skill-title">React</span>
        <ProgressBar />
      </div>
    </div>
  );
}

export default SkillBox;
