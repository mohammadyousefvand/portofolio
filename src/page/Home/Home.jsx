import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home w-full flex">
      <div className="avatar flex center">
        <div className="image-box">
          <img className="avatar-image" src="image/me.jpg" alt="" />
        </div>
      </div>
      <div className="myName flex center">hasan</div>
    </div>
  );
}

export default Home;
