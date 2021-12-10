import { createSlice } from "@reduxjs/toolkit";
const todaysCustomerList = [
  {
    id: "c1",
    name: "Animesh Chopra",
    mobile: 8163645517,
    billAmount: 500,
    paidAmount: 300,
    paymentMode: "Cash",
    pointsUsed: 10,
    pointsGiven: 1,
  },
  {
    id: "c2",
    name: "Bhavesh Gupta",
    mobile: 7876234903,
    billAmount: 200,
    paidAmount: 200,
    paymentMode: "Card",
    pointsUsed: 0,
    pointsGiven: 2,
  },
  {
    id: "c3",
    name: "Dinesh Nehra",
    mobile: 9098758493,
    billAmount: 100,
    paidAmount: 100,
    paymentMode: "UPI",
    pointsUsed: 5,
    pointsGiven: 2,
  },
  {
    id: "c4",
    name: "Jai Bhanushali",
    mobile: 8163645517,
    billAmount: 600,
    paidAmount: 400,
    paymentMode: "Cash",
    pointsUsed: 0,
    pointsGiven: 7,
  },
  {
    id: "c5",
    name: "Ram",
    mobile: 8163645517,
    billAmount: 300,
    paidAmount: 300,
    paymentMode: "Cash",
    pointsUsed: 20,
    pointsGiven: 3,
  },
  {
    id: "c6",
    name: "Raj Kishor Gyaneshwar",
    mobile: 8163645517,
    billAmount: 120,
    paidAmount: 120,
    paymentMode: "Card",
    pointsUsed: 0,
    pointsGiven: 7,
  },
  {
    id: "c7",
    name: "Nitesh Verma",
    mobile: 8163645517,
    billAmount: 400,
    paidAmount: 200,
    paymentMode: "Card",
    pointsUsed: 10,
    pointsGiven: 6,
  },
  {
    id: "c8",
    name: "Sachin Ganguli",
    mobile: 8163645517,
    billAmount: 500,
    paidAmount: 300,
    paymentMode: "Cash",
    pointsUsed: 10,
    pointsGiven: 1,
  },
  {
    id: "c9",
    name: "Prashant Kumar Bist",
    mobile: 8163645517,
    billAmount: 220,
    paidAmount: 120,
    paymentMode: "Cash",
    pointsUsed: 0,
    pointsGiven: 2,
  },
  {
    id: "c10",
    name: "Himesh Reshamiya",
    mobile: 8163645517,
    billAmount: 150,
    paidAmount: 150,
    paymentMode: "Cash",
    pointsUsed: 0,
    pointsGiven: 2,
  },
];

const reportSlice = createSlice({
  name: "report-slice",
  initialState: {
    isDetailedBoxVisible: false,
    filterType: null,
    todaysCustomerList: todaysCustomerList,
  },
  reducers: {
    toggleDetailedBox(state, action) {
      state.isDetailedBoxVisible = !state.isDetailedBoxVisible;
      state.filterType = action.payload.filterType;
    },
  },
});

export const reportPageActions = reportSlice.actions;

export default reportSlice;
