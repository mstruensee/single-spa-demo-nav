import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { history } from "./history";
import { navbarReducer } from "./navbar/navbar.reducer";

export const reducers = combineReducers({
  router: connectRouter(history),
  navbar: navbarReducer,
});
