import React from "react";
import "./ProgressBar.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { InView } from "react-intersection-observer";

function ProgressBar({ value, title }) {
  return (
    <InView delay={500}>
      {({ inView, ref }) => {
        return (
          <div className="progress-skills" ref={ref} delay={100}>
            <CircularProgressbar
              value={inView ? value : 0}
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
                trailColor: "#312e66"
              })}
            />
          </div>
        );
      }}
    </InView>
  );
}

export default ProgressBar;
