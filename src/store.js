import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
import orderDetailReducer from "./features/order/orderSlice";
import orderPayReducer from "./features/order/orderPaySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    orderDetail: orderDetailReducer,
    orderPay: orderPayReducer,
  },
});
