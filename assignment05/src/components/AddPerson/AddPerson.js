import React, { Component } from 'react';
import  { connect } from "react-redux";

import './AddPerson.css';

class Person extends Component {
    render () {
        return (
            <div className="AddPerson">
                <button onClick={() => {
                    this.props.onAddPerson();
                }}>Add Person</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => {
            dispatch({
                type: "ADD_PERSON"
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Person);