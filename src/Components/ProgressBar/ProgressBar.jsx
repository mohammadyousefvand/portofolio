import React from "react";
import "./ProgressBar.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar() {
  const percentage = 66;
  return (
    <div className="progress-skills">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}

export default ProgressBar;
