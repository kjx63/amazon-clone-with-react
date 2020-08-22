export const initialState = {
  // basket: ['Bread', 'Chiken'], // basket.length == 2 (at the bottom of the Header.js)
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      // return the new layer of data
      return {
        // return the state and ...
        ...state,
        // ... overwrite the value of basket with a new value
        basket: [...state.basket, action.item],
      };
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic for removing item from basket
      return { ...state };
      break;

    default:
      return state;
  }
}

export default reducer;
