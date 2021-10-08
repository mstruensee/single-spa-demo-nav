import React from "react";
import "./root.component.css";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store } from "./store";
import { history } from "./history";
import { NavbarComponent } from "./navbar/navbar.component";

export const RootComponent = () => (
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <NavbarComponent />
    </ConnectedRouter>
  </Provider>
);
