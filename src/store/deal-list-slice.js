import { createSlice } from "@reduxjs/toolkit";

const dealListSlice = createSlice({
  name: "deal-list",
  initialState: { dealListItems: [] },
  reducers: {
    loadDealItem(state, action) {
      const items = action.payload;
      state.dealListItems = items;
    },
  },
});

export const dealListActions = dealListSlice.actions;

export default dealListSlice;
