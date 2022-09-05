import axios from "axios";
import { baseUrl } from "../utils/url";

const reducer = async (state, action) => {
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "ADD_TO_CART") {
    try {
      const { data } = await axios.get(`${baseUrl}service/${action.payload}`);
      const cartItem = data.service;
      console.log(cartItem);
    } catch (error) {
      console.log(error);
    }
    return;
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
