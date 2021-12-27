import { createSlice } from "@reduxjs/toolkit";

const currentCustomerSlice = createSlice({
  name: "current-customer",
  initialState: {
    currentCustomer: {},
    currentCustomerOrders: [],
    hasMore: false,
    loading: true,
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
    setHasMoreTrue(state) {
      state.hasMore = true;
    },
    setHasMoreFalse(state) {
      state.hasMore = false;
    },
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
  },
});

export const currentCustomerActions = currentCustomerSlice.actions;

export default currentCustomerSlice;
