import "./App.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Video from "./Components/Video";
import NavBar from "./Components/NavBar";
import StartPage from "./Components/StartPage";
import Footer from "./Components/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Videos/:id" element={<Video />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer /> 
      </div>
    );
  }
}

export default App;
