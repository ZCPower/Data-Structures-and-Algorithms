import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Nav from './Components/Nav'
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
    </div>
  );
}

export default App;
