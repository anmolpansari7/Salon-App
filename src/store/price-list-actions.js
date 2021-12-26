import axios from "axios";
import { priceListActions } from "./price-list-slice";
import { authSliceAction } from "./auth-slice";
import { toast } from "react-toastify";

require("dotenv").config();

export const getPriceListData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/pricelist`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(priceListActions.loadPriceItem(res.data));
        }
      })
      .catch((error) => {
        toast.error("Server Disconnected!");
        console.log(error);
      });
  };
};

export const sendPriceListData = (name, cost) => {
  return (dispatch) => {
    // Send Data to DB
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/pricelist/add`,
        {
          name: name,
          cost: cost,
          status: "active",
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Item Added! 👍");
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

export const deletePriceListData = (id) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pricelist/${id}`,
        {
          status: "deleted",
        },
        {
          headers: { Authorization: `Bearer ${ownerToken}` },
        }
      )
      .then(() => {
        toast.success("Item Removed! ✌");
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

export const updatePriceItemData = (id, val) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pricelist/updateItem/${id}`,
        {
          id: id,
          name: val,
        },
        {
          headers: { Authorization: `Bearer ${ownerToken}` },
        }
      )
      .then(() => {
        toast.success("Item Updated! 👍");
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

export const updatePriceCostData = (id, val) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pricelist/updateCost/${id}`,
        {
          id: id,
          cost: val,
        },
        {
          headers: { Authorization: `Bearer ${ownerToken}` },
        }
      )
      .then(() => {
        toast.success("Item Cost Updated! 🤑");
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
