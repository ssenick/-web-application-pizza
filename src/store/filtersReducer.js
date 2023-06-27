const defaultState = {
   category: null,
   sortBy: 0
}
const SET_BY_CATEGORY = 'SET_BY_CATEGORY';
const SET_SORT_BY = 'SET_SORT_BY';


export const filtersReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_BY_CATEGORY:
         return {...state, category: action.payload}
      case SET_SORT_BY:
         return {...state, sortBy: action.payload}
      default:
         return state;
   }
}


export const setByCategory = (payload) => (
   {type: SET_BY_CATEGORY, payload}
)
export const setSortBy = (payload) => (
   {type: SET_SORT_BY, payload}
)