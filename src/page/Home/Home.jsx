import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home w-full flex p-x">
      <div className="avatar-container flex center">
        <div className="avatar-image-box">
          <img className="avatar-image" src="image/me.jpg" alt="" />
        </div>
      </div>
      <div className="myName-container flex center">
        <span className="hello-text">Hello, I'm</span>
        <span className="name-text">Mohammad Yousefvand</span>
        <span className="job-text">Front End Developer</span>
        <button className="download-Cv">Download CV</button>
      </div>
    </div>
  );
}

export default Home;
