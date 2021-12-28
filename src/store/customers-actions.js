import axios from "axios";
import { authSliceAction } from "./auth-slice";
import { customerListActions } from "./customers-slice";
import { currentCustomerActions } from "./current-customer-slice";
import { toast } from "react-toastify";

require("dotenv").config();

export const sendNewCustomerData = (newCustomer, navigate) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/customer/add`,
        {
          name: newCustomer.name,
          phone: newCustomer.phone,
          dob: newCustomer.dob,
          address: newCustomer.address,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then((res) => {
        const newCustomerId = res.data;
        toast.success("Customer Added! 👍");
        navigate(`/customer/${newCustomerId}`);
        dispatch(currentCustomerActions.clearCurrCustomerOrders());
        dispatch(currentCustomerActions.setPageNumberOne());
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

export const getTotalVisitedCustomers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/customer`)
      .then((res) => {
        dispatch(customerListActions.setTotalVisitedCustomers(res.data));
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
