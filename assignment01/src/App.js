import React, { Component } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import "./App.css";

class App extends Component {
  state = {
    userName: "Willie Meyer"
  };

  onChangeInput = event => {
    let newUserName = event.target.value;

    this.setState({
      userName: newUserName
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changeHandler={this.onChangeInput} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
