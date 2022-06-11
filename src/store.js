import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/userslice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
