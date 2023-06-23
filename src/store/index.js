import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {pizzasReducer} from "./pizzasReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import {filters} from "./filters";


const rootReducer = combineReducers({
   pizzas: pizzasReducer,
   filters: filters
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))