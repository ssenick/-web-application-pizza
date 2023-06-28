import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {pizzasReducer} from "./pizzasReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import {filtersReducer} from "./filtersReducer";
import {cartReducer} from "./cartReducer";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
   pizzas: pizzasReducer,
   filters: filtersReducer,
   cart:cartReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))