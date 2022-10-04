const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    const item = action.payload;
    console.log("remove", state.cartItems);
    return {
      ...state,
      cartItems: state.cartItems.filter((cartItem) => {
        return cartItem.service !== item;
      }),
    };
  }
  if (action.type === "ADD_TO_CART") {
    // console.log(state.cart.cartItems);
    return {
      ...state,

      cartItems: [...state.cartItems, action.payload],
    };
    // const item = action.payload;
    // const existItem = state.cartItems.find((x) => x._id === item._id);
    // if (existItem) {
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map((x) =>
    //       x._id === existItem._id ? item : x
    //     ),
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, item],
    //   };
    // }
  }
  if (action.type === "SAVE_PAYMENT_METHOD") {
    return {
      ...state,
      paymentMethod: action.payload,
    };
  }
};

export default reducer;
