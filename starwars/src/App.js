import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hair_color: "",
      gender: ""
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/people/1/").then(result =>
      this.setState({
        name: result.data.name,
        hair_color: result.data.hair_color
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>here is the data! {this.state.name}</h1>
        <p>{this.state.hair_color}</p>
      </div>
    );
  }
}

export default App;
