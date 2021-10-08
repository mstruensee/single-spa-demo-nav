import { NAVBAR_FETCH, NAVBAR_SET } from "./navbar.types";

export const fetchNavbarAction = () => ({
  type: NAVBAR_FETCH,
});

export const setNavbarAction = (response) => ({
  type: NAVBAR_SET,
  payload: {
    navbar: response,
  },
});
