export const initialState = {
  // basket: ['Bread', 'Chiken'], // basket.length == 2 (at the bottom of the Header.js)
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        // set the user to whatever the action.user was
        user: action.user,
      };
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

      // we cloned the basket
      let newBasket = [...state.basket];

      // Find the index of the item you want to remove
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.log(action.id);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
