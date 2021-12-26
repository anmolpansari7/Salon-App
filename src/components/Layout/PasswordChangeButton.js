import React from "react";
import keyImg from "./../../assets/key.svg";

const PasswordChangeButton = ({ onShow }) => {
  return (
    <button
      className=" fixed bottom-7 right-7"
      title="Change Password"
      onClick={onShow}
    >
      <img src={keyImg} alt="Change Password" className=" h-7" />
    </button>
  );
};

export default PasswordChangeButton;
