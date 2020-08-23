export const initialState = {
  // basket: ['Bread', 'Chiken'], // basket.length == 2 (at the bottom of the Header.js)
  basket: [
    // {
    //   id: '32456367',
    //   title:
    //     'Apple iPad Pro (11-inch, Wi-Fi, 64GB) - Space Gray (Latest Model) (Renewed)',
    //   price: 598.99,
    //   rating: 5,
    //   image: 'https://m.media-amazon.com/images/I/81wV6umwpZL._AC_UY218_.jpg',
    // },
    // {
    //   id: '39487573',
    //   title:
    //     'Apple iPad Pro (11-inch, Wi-Fi, 64GB) - Space Gray (Latest Model) (Renewed)',
    //   price: 598.99,
    //   rating: 5,
    //   image: 'https://m.media-amazon.com/images/I/81wV6umwpZL._AC_UY218_.jpg',
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
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
