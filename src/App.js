import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Header from "./page/Header/Header";
import Home from "./page/Home/Home";
import Portofolio from "./page/Portfolio/Portofolio";
import Skills from "./page/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Home />
      <About />
      <Skills />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
