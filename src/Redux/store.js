import { createStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { applyMiddleware, combineReducers } from "@reduxjs/toolkit"
import loginReducer from "./Login/reducer"
import searchReducer from "./Search/reducer"


const root = {
    login: loginReducer,
    search: searchReducer
}

const rootReducer = combineReducers(root)

const composed = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composed)