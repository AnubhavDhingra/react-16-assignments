import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = props => {
  const transformedIngredient = Object.keys(props.ingredients).map(key => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <BurgerIngredient key={key + i} type={key} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
