const defaultState = {
   items: []
}

const ALL_PIZZAS = "ALL_PIZZAS";

export const pizzasReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ALL_PIZZAS:
         return {...state, items: action.payload}
      default:
         return state;
   }
}

export const AllPizzasAction = (payload) => (
   {type: ALL_PIZZAS, payload}
)