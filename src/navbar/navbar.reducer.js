import { NAVBAR_SET } from "./navbar.types";

export const navbarReducer = (state = [], action) => {
  switch (action.type) {
    case NAVBAR_SET: {
      return action.payload.navbar;
    }
    default: {
      return state;
    }
  }
};
