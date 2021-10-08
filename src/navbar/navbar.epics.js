import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { setNavbarAction } from "./navbar.actions";
import { NAVBAR_FETCH } from "./navbar.types";

export const fetchNavbarEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(NAVBAR_FETCH),
    mergeMap((action) =>
      getJSON("https://6113483089c6d00017ac06c6.mockapi.io/api/v1navbar/")
    ),
    map(setNavbarAction)
  );
