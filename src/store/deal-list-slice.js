import { createSlice } from "@reduxjs/toolkit";

// const dealItems = [
//   {
//     id: "d1",
//     deal: "Regular Cut + Eyebrows",
//     cost: 70,
//   },
//   {
//     id: "d2",
//     deal: "Regular Cut + Eyebrows + Bread",
//     cost: 120,
//   },
// ];

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
