import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../api/axios";
const initialState = {
  loadingPay: true,
  errorPay: false,
  successPay: false,
};

export const payOrder = createAsyncThunk(
  "/pay",
  async (orderId, paymentResult, thunkAPI) => {
    try {
      await axiosPrivate.put(`/orderService/${orderId}`, paymentResult);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderPaySlice = createSlice({
  name: "orderPay",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(payOrder.pending, (state) => {
        state.loadingPay = true;
      })
      .addCase(payOrder.fulfilled, (state) => {
        state.loadingPay = false;
        state.errorPay = false;
        state.successPay = true;
      })
      .addCase(payOrder.rejected, (state) => {
        state.loadingPay = false;
        state.errorPay = true;
        state.successPay = false;
      });
  },
});

export default orderPaySlice.reducer;
