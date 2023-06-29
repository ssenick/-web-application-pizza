const defaultState = {
   items: {},
   fullPrice: 0,
   allProducts: 0,
}

const SET_CART = "SET_CART";

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
               totalPricePizzas: getTotalPrice(pizzas)
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


      default:
         return state;
   }
}

export const setCart = (payload) => (
   {type: SET_CART, payload}
)