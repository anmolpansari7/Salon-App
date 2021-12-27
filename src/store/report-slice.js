import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report-slice",
  initialState: {
    isDetailedBoxVisible: false,
    detailSectionHeading: null,
    overview: [],
    reportDetails: [],
    loading: false,
  },
  reducers: {
    toggleDetailedBox(state, action) {
      state.isDetailedBoxVisible = !state.isDetailedBoxVisible;
      state.detailSectionHeading = action.payload.detailSectionHeading;
    },
    loadOverview(state, action) {
      const overview = action.payload;
      state.overview = overview;
    },
    loadReportDetails(state, action) {
      const details = action.payload;
      state.reportDetails = details;
    },
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
  },
});

export const reportPageActions = reportSlice.actions;

export default reportSlice;
