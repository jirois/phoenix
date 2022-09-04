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
    let cartItem = {};
    try {
      const { data } = await axios.get(`${baseUrl}service/${action.payload}`);
      cartItem = data.service;

      console.log(cartItem);
    } catch (error) {
      console.log(error);
    }
    return await { ...state, cart: [...state.cart, { cartItem }] };
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
