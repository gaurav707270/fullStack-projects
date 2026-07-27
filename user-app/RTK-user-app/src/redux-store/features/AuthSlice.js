import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const addUser = createAsyncThunk("post/addUser", async (userData) => {
  const res = await axios.post("http://localhost:3000/users", userData)
  return res.data

})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    loading: false,
    error: null,


  },
  reducers: {
    // signUpRed: (state, action) => {
    //   state.user = action.payload;
    // },

    // signInRed: (state, action) => {
    //   // login logic
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = null
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users.push(action.payload)

    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;

    })
  },
});

// export const { signUpRed, signInRed } = authSlice.actions;

export default authSlice.reducer;