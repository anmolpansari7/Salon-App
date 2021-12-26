import axios from "axios";
import { pointsCalculatorActions } from "./points-calculator-slice";
import { authSliceAction } from "./auth-slice";
import { toast } from "react-toastify";

require("dotenv").config();

export const getPointsCalculatorData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/pointsCalculator`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(pointsCalculatorActions.loadPointsCalculatorData(res.data));
        }
      })
      .catch((err) => {
        toast.error("Server Disconnected!");
      });
  };
};

export const updatePointsCalculatorForRupee = (val) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pointsCalculator/updateForRupee`,
        {
          forRupee: val,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Points Calculator Updated! 👍");
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

export const updatePointsCalculatorGivenPoints = (val) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pointsCalculator/updateGivenPoints`,
        {
          givenPoints: val,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Points Calculator Updated! 👍");
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

export const updatePointsCalculatorForPoints = (val) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pointsCalculator/updateForPoints`,
        {
          forPoints: val,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Points Calculator Updated! 👍");
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

export const updatePointsCalculatorGivenDiscount = (val) => {
  const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/pointsCalculator/updateGivenDiscount`,
        {
          givenDiscount: val,
        },
        { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast.success("Points Calculator Updated! 👍");
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
