import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
