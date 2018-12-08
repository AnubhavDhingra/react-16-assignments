import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

import FibonacciCounter from "./FibonacciCounter";
import './App.css';

const init = {
  index: 1,
  last: 1,
  current: 1
}

const reducer = (state = init, action) => {
  switch (action.type) {
    case "NEXT":
      const lastCopy = state.last;
      const currentCopy = state.current;
      
      return {
        ...state,
        last: state.current,
        current: currentCopy + lastCopy,
        index: state.index + 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrap">
          <FibonacciCounter />
        </div>
      </Provider>
    );
  }
}

export default App;
