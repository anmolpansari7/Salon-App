import axios from "axios";
import { authSliceAction } from "./auth-slice";
import { toast } from "react-toastify";

import { reportPageActions } from "./report-slice";

require("dotenv").config();

export const getReportOverviews = () => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report/overview`, {
        headers: { Authorization: `Bearer ${ownerToken}` },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(reportPageActions.loadOverview(res.data));
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Not Authenticated !");
          localStorage.removeItem("ownerToken");
          dispatch(authSliceAction.setIsAuthFalse());
        } else {
          toast.error("Server Disconnected!");
        }
      });
  };
};

export const getReportDetials = (detailSectionHeading) => {
  // for generating Url
  detailSectionHeading = detailSectionHeading.replace(/\s+/g, "");
  detailSectionHeading = detailSectionHeading.replace(/[^a-zA-Z ]/g, "");
  detailSectionHeading = detailSectionHeading.toLowerCase();

  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    const url = `${process.env.REACT_APP_BASE_URL}/report/${detailSectionHeading}Customers`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${ownerToken}` } })
      .then((res) => {
        if (res.status === 200) {
          dispatch(reportPageActions.loadReportDetails(res.data));
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Not Authenticated !");
          localStorage.removeItem("ownerToken");
          dispatch(authSliceAction.setIsAuthFalse());
        } else {
          toast.error("Server Disconnected!");
        }
      });
  };
};
