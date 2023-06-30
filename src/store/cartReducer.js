import {produce} from "immer"
const defaultState = {
   items: {},
   fullPrice: 0,
   allProducts: 0,
}

const SET_CART = "SET_CART";
const EMPTY_CART = "EMPTY_CART";
const REMOVE_ITEM = 'REMOVE_ITEM';

const getTotalPrice = (arr) => arr.reduce((acc, item) => item.price + acc, 0)
export const cartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_CART: {
         const pizzas =
            !state.items[action.payload.id]
               ?
               [action.payload]
               :
               [...state.items[action.payload.id].items, action.payload]

         const newCartsPizzas = {
            ...state.items,
            [action.payload.id]: {
               items: pizzas,
               totalPizzas: pizzas.length,
               totalPricePizzas: getTotalPrice(pizzas),
            }
         }

         const newCartsPizzasToArray = Object.values(newCartsPizzas).map(item => item.items);
         const arrFinal = [].concat.apply([], newCartsPizzasToArray);

         return {
            ...state,
            items: newCartsPizzas,
            fullPrice: getTotalPrice(arrFinal),
            allProducts: Object.keys(arrFinal).length,
         }
      }
      case EMPTY_CART:
         return {
            items: {},
            fullPrice: 0,
            allProducts: 0,
         }

      case REMOVE_ITEM: {
         // const newCartsPizzas = {
         //    ...state.items
         // }
         // delete newCartsPizzas[action.id]
         // return {
         //    ...state,
         //    items: newCartsPizzas,
         // }
         return produce(state,draft => {
            const price = draft.fullPrice = draft.fullPrice - draft.items[action.id].totalPricePizzas;
            const totalPizzas = draft.allProducts = draft.allProducts - draft.items[action.id].totalPizzas;
            const arr = delete draft.items[action.id]
         })
      }


      default:
         return state;
   }
}

export const setCart = (payload) => (
   {type: SET_CART, payload}
)
export const emptyCart = () => (
   {type: EMPTY_CART}
)
export const removeItem = (id) => (

   {type: REMOVE_ITEM, id}
)