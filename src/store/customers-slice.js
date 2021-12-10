import { createSlice } from "@reduxjs/toolkit";

const customers = [
  {
    id: "c1",
    name: "Animesh Chopra",
    mobile: 8163645517,
    points: 50,
  },
  {
    id: "c2",
    name: "Bhavesh Gupta",
    mobile: 7876234903,
    points: 10,
  },
  {
    id: "c3",
    name: "Dinesh Nehra",
    mobile: 9098758493,
    points: 80,
  },
  {
    id: "c4",
    name: "Jai Bhanushali",
    mobile: 8163645517,
    points: 50,
  },
  {
    id: "c5",
    name: "Ram",
    mobile: 8163645517,
    points: 30,
  },
  {
    id: "c6",
    name: "Raj Kishor Gyaneshwar",
    mobile: 8163645517,
    points: 120,
  },
  {
    id: "c7",
    name: "Nitesh Verma",
    mobile: 8163645517,
    points: 50,
  },
  {
    id: "c8",
    name: "Sachin Ganguli",
    mobile: 8163645517,
    points: 50,
  },
  {
    id: "c9",
    name: "Prashant Kumar Bist",
    mobile: 8163645517,
    points: 50,
  },
  {
    id: "c10",
    name: "Himesh Reshamiya",
    mobile: 8163645517,
    points: 50,
  },
];
const total = customers.length;
const customerListSlice = createSlice({
  name: "customer-list",
  initialState: {
    customerList: customers,
    suggestions: [],
    totalVisitedCustomers: total,
  },
  reducers: {
    addCustomers(state, action) {
      const newCustomer = action.payload;
      state.customerList.push({
        id: newCustomer.id,
        name: newCustomer.name,
        mobile: newCustomer.mobile,
        points: newCustomer.points,
      });

      state.totalVisitedCustomers = ++state.totalVisitedCustomers;
    },
    addSuggestions(state, action) {
      const suggestedCustomers = action.payload;
      state.suggestions = suggestedCustomers;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
  },
});

export const customerListActions = customerListSlice.actions;

export default customerListSlice;
