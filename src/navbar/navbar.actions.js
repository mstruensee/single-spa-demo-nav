import { NAVBAR_FETCH, NAVBAR_REDUCER } from "./navbar.types";
import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers";

export const fetchNavbarAction = () => ({
  type: NAVBAR_FETCH,
});

export const setNavbarAction = (response) =>
  setListAction({
    reducerName: NAVBAR_REDUCER,
    payload: response,
  });
