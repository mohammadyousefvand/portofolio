import React from "react";
import "./ProgressBar.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value, title }) {
  return (
    <div className="progress-skills">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          ...(title === "HTML" && {
            pathColor: "#e34c26",
            textColor: "#e34c26"
          }),
          ...(title === "CSS" && {
            pathColor: "#264de4",
            textColor: "#3f87e0"
          }),
          ...(title === "Javascript" && {
            pathColor: "#f0db4f",
            textColor: "#f0db4f"
          }),
          ...(title === "React" && {
            pathColor: "#61DBFB",
            textColor: "#61DBFB"
          }),
          trailColor: "#130952"
        })}
      />
    </div>
  );
}

export default ProgressBar;
