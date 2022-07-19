import React, { useRef } from "react";
import SkillBox from "./SkillBox/SkillItem";
import "./Skills.css";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

function Skills() {
  const firstskillsRef = useRef([
    { title: "HTML", value: 80 },
    { title: "CSS", value: 60 },
    { title: "Javascript", value: 60 },
    { title: "React", value: 70 }
  ]);

  const secondskillsRef = useRef([
    "Bootstrap",
    "Tailwind",
    "Styled-component",
    "Redux",
    "Sass",
    "Git/Github",
    "Material UI"
  ]);

  return (
    <div className="skills w-full flex p-x">
      <span className="skills-title">My Experience</span>
      <div className="skill-container flex">
        <div className="skill-Box flex">
          {firstskillsRef.current.map((skill, index) => (
            <div key={index} className="skill-item">
              <SkillBox title={skill.title} value={skill.value} />
              <ProgressBar value={skill.value} title={skill.title} />
            </div>
          ))}
        </div>
        <div className="skill-Box flex">
          {secondskillsRef.current.map((skill, index) => (
            <div key={index} className="second-skill-item">
              <SkillBox title={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
