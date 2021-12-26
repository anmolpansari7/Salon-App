import axios from "axios";
import { authSliceAction } from "./auth-slice";
import { toast } from "react-toastify";

require("dotenv").config();

export const sendNewOrderData = (newOrder) => {
  return (dispatch) => {
    const ownerToken = localStorage.getItem("ownerToken");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/order/add`,
        {
          customerId: newOrder.customerId,
          itemIds: newOrder.itemIds,
          totalAmount: newOrder.totalAmount,
          paidAmount: newOrder.paidAmount,
          paymentMode: newOrder.paymentMode,
          remark: newOrder.remark,
          pointsUsed: newOrder.pointsUsed,
          pointsGiven: newOrder.pointsGiven,
          discount: newOrder.discount,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Order Saved! 👍");
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
