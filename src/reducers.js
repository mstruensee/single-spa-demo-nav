import { combineReducers } from "redux";
import { listReducer } from "@wecreatesoftware/redux-higher-order-reducers";
import { connectRouter } from "connected-react-router";
import { history } from "./history";
import { NAVBAR_REDUCER } from "./navbar/navbar.types";

export const reducers = combineReducers({
  router: connectRouter(history),
  navbar: listReducer({
    reducerName: NAVBAR_REDUCER,
  }),
});
