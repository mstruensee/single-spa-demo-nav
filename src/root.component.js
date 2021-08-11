import React from "react";
import { Link } from "react-router-dom";
import "./root.component.css";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store } from "./store";
import { history } from "./history";
import { NavbarComponent } from "./navbar/navbar.component";

export const RootComponent = () => (
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <NavbarComponent></NavbarComponent>
      {/* <nav className="nav">
        <Link to="/page1" className="link">
          Page 1
        </Link>
        <Link to="/page2" className="link">
          Page 2
        </Link>
      </nav> */}
    </ConnectedRouter>
  </Provider>
);
