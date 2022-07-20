import React from "react";
import Button from "../../Components/Button/Button";
import "./Portofolio.css";

function Portofolio() {
  return (
    <div className="portfolio flex w-full p-x">
      <span className="portfolio-title">My Portofolio</span>
      <div className="project-wrapper">
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
            <Button content="Github" width={100} />
            <Button content="Live demo" width={160} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
