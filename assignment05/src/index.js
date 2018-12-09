import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
import App from './App';

let initState = {
    persons: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_PERSON":
            const names = ["Max", "Monica", "Andrew", "Michael", "James", "John", "Sylvia", "Tanja"];
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: names[Math.floor(Math.random() * names.length)],
                age: Math.floor( Math.random() * 40 )
            }
            // Make sure that you really create a COPY. Not just a copy of the reference-variable.
            let personsCopy = [...state.persons];

            personsCopy.push(newPerson);

            return {
                ...state,
                persons: personsCopy
            };
        case "DELETE_PERSON":
            let filteredPersons = state.persons.filter((person) => {
                if (person.id !== action.id) {
                    return person;
                }
            });    
            
            return {
                ...state,
                persons: filteredPersons
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>,
                document.getElementById('root'));
