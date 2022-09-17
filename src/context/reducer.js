const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    console.log("remove");
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      ),
    };
  }
  if (action.type === "ADD_TO_CART") {
    // console.log(state.cart.cartItems);
    return {
      ...state,

      cartItems: [...state.cartItems, action.payload],
    };
    // const item = action.payload;
    // const existItem = state.cart.cartItems.find((x) => x._id === item._id);
    // if (existItem) {
    //   return {
    //     ...state,
    //     cartItems: state.cart.cartItems.map((x) =>
    //       x._id === existItem._id ? item : x
    //     ),
    //   };
    // } else {
    //   return {
    //     ...state,
    //     cartItems: [...state.cart.cartItems, { ...item }],
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
