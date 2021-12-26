import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logout from "./../../assets/logout.svg";
import { authSliceAction } from "../../store/auth-slice";

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    window.localStorage.removeItem("ownerToken");
    dispatch(authSliceAction.setIsAuthFalse());
    navigate("/");
  };

  return (
    <button className=" fixed top-7 right-7" onClick={onLogout}>
      <img src={logout} alt="Logout" />
    </button>
  );
};

export default LogoutButton;
