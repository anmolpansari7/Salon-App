import { createSlice } from "@reduxjs/toolkit";

// const listItems = [
//   {
//     id: "i1",
//     item: "Regular Haircut",
//     cost: 70,
//   },
//   {
//     id: "i2",
//     item: "Haircut + Beard",
//     cost: 120,
//   },
//   {
//     id: "i3",
//     item: "Blow-Out",
//     cost: 30,
//   },
//   {
//     id: "i4",
//     item: "Senior Citizen (62 and Over)",
//     cost: 50,
//   },
//   {
//     id: "i5",
//     item: "Hot Towel Shave",
//     cost: 200,
//   },
//   {
//     id: "i6",
//     item: "Eyebrows",
//     cost: 50,
//   },
//   {
//     id: "i7",
//     item: "Shape Up",
//     cost: 50,
//   },
//   {
//     id: "i8",
//     item: "Beard Trim",
//     cost: 70,
//   },
//   {
//     id: "i9",
//     item: "Kids Cuts (10 and under)",
//     cost: 50,
//   },
//   {
//     id: "i10",
//     item: "Shampoo",
//     cost: 80,
//   },
// ];

const priceListSlice = createSlice({
  name: "price-list",
  initialState: { priceListItems: [] },
  reducers: {
    loadPriceItem(state, action) {
      const items = action.payload;
      state.priceListItems = items;
    },
  },
});

export const priceListActions = priceListSlice.actions;

export default priceListSlice;
