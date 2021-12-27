import axios from "axios";
import { currentCustomerActions } from "./current-customer-slice";
import { authSliceAction } from "./auth-slice";
import { toast } from "react-toastify";

require("dotenv").config();

export const getCurrentCustomerData = (id) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    const url = `${process.env.REACT_APP_BASE_URL}/customer/details/${id}`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${ownerToken}` } })
      .then((res) => {
        if (res.status === 200) {
          dispatch(currentCustomerActions.loadCurrCustomer(res.data));
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Not Authenticated ! for getting customer data");
          localStorage.removeItem("ownerToken");
          dispatch(authSliceAction.setIsAuthFalse());
        } else {
          toast.error("Server Disconnected!");
        }
      });
  };
};

export const getCurrentCustomerOrders = (id, pageNumber, limit) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");
    dispatch(currentCustomerActions.setLoadingTrue());

    const url = `${process.env.REACT_APP_BASE_URL}/order/selected-customer/${id}?page=${pageNumber}&limit=${limit}`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${ownerToken}` } })
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            currentCustomerActions.loadCurrCustomerOrders(res.data.result)
          );
          if (res.data.next !== undefined) {
            console.log("more page after this", res.data.next);
            dispatch(currentCustomerActions.setHasMoreTrue());
          } else {
            console.log("no more page after this", res.data.next);
            dispatch(currentCustomerActions.setHasMoreFalse());
          }
          dispatch(currentCustomerActions.setLoadingFalse());
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Not Authenticated ! customer order");
          localStorage.removeItem("ownerToken");
          dispatch(authSliceAction.setIsAuthFalse());
        } else {
          toast.error("Server Disconnected!");
        }
      });
  };
};

export const updateCurrentCustomer = (id, dues, points) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    const url = `${process.env.REACT_APP_BASE_URL}/customer/updateDuesAndPoints/${id}`;
    axios
      .patch(
        url,
        { dues: dues, points: points },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        dispatch(getCurrentCustomerData(id));
        dispatch(getCurrentCustomerOrders(id, 1, 1));
      })
      .then(() => {
        toast.success("Customer Data Updated! 👍");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          toast.error("Not Authenticated ! for adding order");
          localStorage.removeItem("ownerToken");
          dispatch(authSliceAction.setIsAuthFalse());
        } else {
          toast.error("Server Disconnected!");
        }
      });
  };
};
