import React from "react";
import "./App.css";
import About from "./page/About/About";
import Header from "./page/Header/Header";
import Home from "./page/Home/Home";
import Portofolio from "./page/Portfolio/Portofolio";
import Skills from "./page/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portofolio />
    </div>
  );
}

export default App;
