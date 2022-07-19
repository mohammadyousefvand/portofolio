import React from "react";
import "./SkillBox.css";
import ProgressBar from "../../../Components/ProgressBar/ProgressBar";

function SkillBox() {
  return (
    <div className="skill-Box flex">
      <div className="skill-item">
        <span className="skill-title">HTML</span>
        <ProgressBar value={80} title='HTML' />
      </div>
      <div className="skill-item">
        <span className="skill-title">CSS</span>
        <ProgressBar value={60} title='CSS' />
      </div>
      <div className="skill-item">
        <span className="skill-title">Javascript</span>
        <ProgressBar value={60} title='JS' />
      </div>
      <div className="skill-item">
        <span className="skill-title">React</span>
        <ProgressBar value={70} title='React' />
      </div>
    </div>
  );
}

export default SkillBox;
