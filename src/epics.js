import { combineEpics } from "redux-observable";
import { fetchNavbarEpic } from "./navbar/navbar.epics";

export const epics = combineEpics(
    fetchNavbarEpic
);
