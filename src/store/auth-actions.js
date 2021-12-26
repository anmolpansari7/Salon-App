import axios from "axios";
import { authSliceAction } from "./auth-slice";

import { toast } from "react-toastify";
require("dotenv").config();

export const verifyOwner = (password, navigate) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/authentication/login`, {
        password: password,
      })
      .then((res) => {
        if (res.data.token !== undefined) {
          localStorage.setItem("ownerToken", res.data.token);
          dispatch(authSliceAction.setIsAuthTrue());
          navigate("/price-list-page");
        } else {
          toast.error("Wrong Password!");
        }
      })
      .catch((error) => {
        console.log("Error :" + error);
      });
  };
};

export const requestPasswordChange = (
  newPassword,
  currentPassword,
  navigate
) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/authentication/changePassword`, {
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
      .then(() => {
        localStorage.removeItem("ownerToken");
        dispatch(authSliceAction.setIsAuthFalse());
        toast.success("Password Changed !");
        toast.info("Login with new password!");
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Wrong! Current Password");
        }
      });
  };
};
