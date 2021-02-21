const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
      };
    case 'INCREASE':
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart
      };
    case 'DECREASE':
      return {
        ...state
      };
  }

  return state;
};

export default reducer;
