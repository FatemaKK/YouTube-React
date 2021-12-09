import "./App.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
