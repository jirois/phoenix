import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/url";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

const getUser = createAsyncThunk("user/getUser", async (user, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl} + users/showMe`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk(
  "auth/logoutUser",
  async (user, thunkAPI) => {
    try {
      await axios.delete(`${baseUrl} + auth/logout`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { saveUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
