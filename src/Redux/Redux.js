import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import ForecastReducer from "./reducers/ForecastReducer";
import ForecastWeekReducer from "./reducers/ForecastWeekReducer";



let reducers = combineReducers({
    ForecastReducer,
    ForecastWeekReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;