import React, { useRef } from "react";
import SkillBox from "./SkillBox/SkillItem";
import "./Skills.css";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

function Skills() {
  const skillsRef = useRef([
    { title: "HTML", value: 80 },
    { title: "CSS", value: 60 },
    { title: "Javascript", value: 60 },
    { title: "React", value: 70 }
  ]);

  return (
    <div className="skills w-full flex p-x">
      <div className="skill-Box flex">
        {skillsRef.current.map((skill, index) => (
          <div className="skill-item">
            <SkillBox key={index} title={skill.title} value={skill.value} />
            <ProgressBar value={skill.value} title={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
