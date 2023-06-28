const defaultState = {
   items: {},
   fullPrice: 0,
   allProducts: 0,
}

const SET_CART = "SET_CART";

export const cartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_CART: {
         const newCartsPizzas = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id]
               ?
               [action.payload]
               :
               [...state.items[action.payload.id], action.payload]
         }
         const newCartsPizzasToArray = Object.values(newCartsPizzas)
         const arrFinal = [].concat.apply([], newCartsPizzasToArray);

         return {
            ...state,
            items: newCartsPizzas,
            fullPrice: arrFinal.reduce((acc, item)=>item.price + acc,0),
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