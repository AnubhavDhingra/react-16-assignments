import React from "react";
import "./UserOutput.css";

let UserOutput = props => {
  return (
    <div className="element">
      <h1>{props.userName}</h1>
      <p className="lorem-text">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem.
      </p>
      <p className="lorem-text">
        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
        libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
        vel, luctus pulvinar, hendrerit id, lorem.
      </p>
    </div>
  );
};

export default UserOutput;
