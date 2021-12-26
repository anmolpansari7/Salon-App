import axios from "axios";
import { dealListActions } from "./deal-list-slice";
import { authSliceAction } from "./auth-slice";
import { toast } from "react-toastify";

require("dotenv").config();

export const getDealListData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/deallist`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(dealListActions.loadDealItem(res.data));
        }
      })
      .catch((error) => {
        console.log("Server Disconnected :" + error.request);
        toast.error("Server Disconnected!");
      });
  };
};

export const sendDealListData = (name, cost) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/deallist/add`,
        {
          name: name,
          cost: cost,
          status: "active",
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Deal Added! 👍");
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

export const deleteDealListData = (id) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/deallist/${id}`,
        {
          status: "deleted",
        },
        {
          headers: { Authorization: `Bearer ${ownerToken}` },
        }
      )
      .then(() => {
        toast.success("Deal Removed! ✌");
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

export const updateDealItemData = (id, val) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/deallist/updateDealItem/${id}`,
        {
          id: id,
          name: val,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Deal Updated! 👍");
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

export const updateDealCostData = (id, val) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/deallist/updateDealCost/${id}`,
        {
          id: id,
          cost: val,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Deal Cost Updated! 🤑");
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
