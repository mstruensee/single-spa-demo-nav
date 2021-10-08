import { createSelector } from "reselect";
import { NAVBAR_REDUCER } from "./navbar.types";

const navbarReducer = (state) => state[NAVBAR_REDUCER];

export const navbarSelector = createSelector(navbarReducer, (navbar) => navbar);
