import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
      userInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      userInput: "",
    });
  };

  componentDidUpdate() {
    if (this.state.userInput.length === 0) return;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${this.state.userInput}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((Data) => {
        this.setState({ Data: Data });
        console.log(Data);
      })
      .catch((error) => {
        console.log("error fetching data");
      });
  }

  render() {
    const { Data, userInput } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className="Search-Form">
          <input
            onChange={this.handleChange}
            type="text"
            className="Search-Bar"
            name="searchBar"
            value={userInput}
          ></input>
          <button type="submit" className="Search-Button">
            Search
          </button>
          <section></section>
        </form>
      </div>
    );
  }
}

export default App;
