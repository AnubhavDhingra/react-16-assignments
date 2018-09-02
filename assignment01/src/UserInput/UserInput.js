import React from "react";

let UserInput = props => {
  return (
    <div className="element">
      <label htmlFor="userInput">Enter a new name: </label>
      <input
        type="text"
        id="userInput"
        value={props.userName}
        onChange={event => {
          props.changeHandler(event);
        }}
      />
    </div>
  );
};

export default UserInput;
