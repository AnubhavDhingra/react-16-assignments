import React from "react";

import Aux from "../../hocs/Aux";
import classes from "./Layout.css";

const Layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default Layout;
