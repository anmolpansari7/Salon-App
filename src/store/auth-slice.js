import { createSlice } from "@reduxjs/toolkit";

const isTokenPresent =
  localStorage.getItem("ownerToken") === null ? false : true;

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuth: isTokenPresent,
  },
  reducers: {
    setIsAuthTrue(state) {
      state.isAuth = true;
    },
    setIsAuthFalse(state) {
      state.isAuth = false;
    },
  },
});

export const authSliceAction = authSlice.actions;

export default authSlice;
