import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      results: ""
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This is going to be a calculator dude!</p>
        </header>
      </div>
    );
  }
}

export default Home;
