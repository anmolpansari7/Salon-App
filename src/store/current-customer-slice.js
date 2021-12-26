import { createSlice } from "@reduxjs/toolkit";

const currentCustomerSlice = createSlice({
  name: "current-customer",
  initialState: {
    currentCustomer: {},
    currentCustomerOrders: [],
  },
  reducers: {
    loadCurrCustomer(state, action) {
      const customer = action.payload;
      state.currentCustomer = customer;
    },
    loadCurrCustomerOrders(state, action) {
      const orders = action.payload;
      state.currentCustomerOrders = orders;
    },
  },
});

export const currentCustomerActions = currentCustomerSlice.actions;

export default currentCustomerSlice;
