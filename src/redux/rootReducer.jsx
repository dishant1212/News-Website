import { combineReducers } from "redux"
import { homeArticals } from "./Reducers/homeArticalsReducer"

export  const  rootReducer=combineReducers({
    homeArticals:homeArticals
})