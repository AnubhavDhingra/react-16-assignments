import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  render() {
    const toDos = this.props.toDos.map((toDo, i) => {
      return <li key={i}>{i + 1}: {toDo}</li>
    });

    return (
      <div className="App">
        <h1>Manage your ToDos</h1>
        <div className="labelled-input">
          <label htmlFor="todo">New ToDo: </label>
          <input type="input" onChange={(event) => {
            this.props.onInputChanged(event.target.value);
          }} id="todo" value={this.props.input} />
        </div>
        <button id="addToDo" onClick={this.props.addToDo}>Add To-Do</button>
        <div id="list">
          <h2>To Dos</h2>
          <ul>
            {toDos}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos,
    input: state.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: () => {
      dispatch({
        type: "INSERT"
      });
    },
    onInputChanged: (newInput) => {
      dispatch({
        type: "INPUT_CHANGED",
        newInput: newInput
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
