import { configureStore } from "@reduxjs/toolkit";
import customerListSlice from "./customers-slice";
import dealListSlice from "./deal-list-slice";
import pointsCalculatorSlice from "./points-calculator-slice";
import priceListSlice from "./price-list-slice";
import reportSlice from "./report-slice";
import currentCustomerSlice from "./current-customer-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    priceList: priceListSlice.reducer,
    dealList: dealListSlice.reducer,
    pointsCalculator: pointsCalculatorSlice.reducer,
    customers: customerListSlice.reducer,
    report: reportSlice.reducer,
    currentCustomer: currentCustomerSlice.reducer,
    authentication: authSlice.reducer,
  },
});

export default store;
