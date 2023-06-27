import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {pizzasReducer} from "./pizzasReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import {filtersReducer} from "./filtersReducer";


const rootReducer = combineReducers({
   pizzas: pizzasReducer,
   filters: filtersReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))