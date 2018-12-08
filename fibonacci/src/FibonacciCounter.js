import React, { Component } from 'react';
import { connect } from "react-redux";

class FibonacciCounter extends Component {
    render() {
      return (
          <div>
              <div className="display">
                <span>{this.props.index}. Fibonacci Number: </span>
                <span className="current-number">{this.props.current}</span>
              </div>
              <div className="navi">
                <button onClick={this.props.onNext}>Get Next Fibonacci Number</button>
              </div>
          </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        current: state.current,
        index: state.index
    };
  }

  const mapDispatchToProps = dispatch => {
      return {
          onNext: () => {
              dispatch({
                  type: "NEXT"
              });
          }
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FibonacciCounter);