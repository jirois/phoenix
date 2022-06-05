import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/userslice/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
