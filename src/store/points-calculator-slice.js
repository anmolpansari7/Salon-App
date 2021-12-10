import { createSlice } from "@reduxjs/toolkit";

const pointsCalculator = {
  forRupees: 0,
  givenPoints: 0,
  forPoints: 0,
  givenDiscount: 0,
};

const pointsCalculatorSlice = createSlice({
  name: "points-calculator",
  initialState: { pointsCalculator: pointsCalculator },
  reducers: {
    loadPointsCalculatorData(state, action) {
      const data = action.payload;
      state.pointsCalculator = data;
    },
  },
});

export const pointsCalculatorActions = pointsCalculatorSlice.actions;

export default pointsCalculatorSlice;
