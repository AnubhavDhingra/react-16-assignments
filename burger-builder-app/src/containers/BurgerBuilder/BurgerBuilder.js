import React, { Component } from "react";

import Aux from "../../hocs/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      BreadTop: 1,
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
      BreadBottom: 1
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
