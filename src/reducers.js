import {objectReducer} from "@wecreatesoftware/redux-higher-order-reducers"
import {combineReducers} from "redux"

import {connectRouter} from "connected-react-router"
import {history} from "./history"

export const reducers = combineReducers({
    router: connectRouter(history),
    "foobar": objectReducer({
        reducerName: "foobar",
        initialState: {foobar: "working"}
    }),
})