import React, { Component } from "react";

import Aux from "../../hocs/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Burger Builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
