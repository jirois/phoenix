import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../api/axios";

const initialOrderState = {
  order: {},
  isLoading: true,
  isError: false,
  message: "",
};

export const getOrderDetail = createAsyncThunk(
  "/order",
  async (orderId, thunkAPI) => {
    try {
      const { data } = await axiosPrivate.get(`/orderService/${orderId}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderDetailSlice = createSlice({
  name: "orderDetais",
  initialState: initialOrderState,
  reducers: {
    reset: (state) => {
      state.order = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.order = action.payload;
      })
      .addCase(getOrderDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = orderDetailSlice.actions;

export default orderDetailSlice.reducer;
