import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = {
    toDos: [],
    input: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "INSERT":
            let toDosCopy = [...state.toDos];

            toDosCopy.push(state.input);

            return {
                ...state,
                toDos: toDosCopy
            };
        case "INPUT_CHANGED":
            return {
                ...state,
                input: action.newInput
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));

