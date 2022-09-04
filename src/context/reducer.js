const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "ADDTOCART") {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload.id }],
    };
  }
  if (action.type === "GET_TOTALs") {
    let { total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const itemTotal = cartItem;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        total: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total };
  }
};

export default reducer;
