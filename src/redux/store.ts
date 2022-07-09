import {combineReducers, configureStore} from "@reduxjs/toolkit";
import calendarReducer from "./slices/calendarSlice";

const rootReducer = combineReducers({
    calendar: calendarReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}