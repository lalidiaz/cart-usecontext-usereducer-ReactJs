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
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount
      };
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'DISPLAY_ITEMS':
      return {
        ...state,
        cart: action.payload,
        loading: false
      };
    case 'TOGGLE_AMOUNT':
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === 'increase') {
              return { ...cartItem, amount: cartItem.amount + 1 };
            } else if (action.payload.type === 'decrease') {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cart: tempCart
      };
  }
  throw new Error('no matching action type');
};

export default reducer;
