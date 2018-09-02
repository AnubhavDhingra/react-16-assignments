import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
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
        <UserInput
          userName={this.state.userName}
          changeHandler={this.onChangeInput}
        />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
