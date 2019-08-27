import React, { Component } from "react";
import styles from "./calculator_body.module.scss";
import Results from "./components/Results";
import Keypad from "./components/Keypad";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      results: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  reset = () => {
    this.setState({
      result: ""
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  render() {
    return (
      <div className={styles.calculator_body}>
        <h1>simple calculator</h1>
        <Results result={this.state.result} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}

export default Home;
