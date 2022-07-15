import React from "react";
import "./App.css";
import About from "./page/About/About";
import Header from "./page/Header/Header";
import Home from "./page/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
