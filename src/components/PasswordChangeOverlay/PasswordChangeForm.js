import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonTab from "../Layout/ButtonTab";
import keyImg from "./../../assets/key.svg";
import { requestPasswordChange } from "../../store/auth-actions";

const PasswordChangeForm = ({ onFormSubmit }) => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onPasswordChangeFormSubmission = (e) => {
    e.preventDefault();
    console.log("Current Password : ", currentPassword);
    console.log("New Password : ", newPassword);
    onFormSubmit();
    dispatch(requestPasswordChange(newPassword, currentPassword));
  };

  return (
    <div>
      <div className=" w-96 px-10 py-12 bg-list-bg rounded-list-box z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex flex-col">
          <img src={keyImg} alt="Key" className=" h-14 mb-3" />
          <h1 className="text-3xl font-medium text-center">Change Password</h1>
        </div>
        <form
          action=""
          className=" text-center text-lg"
          onSubmit={onPasswordChangeFormSubmission}
        >
          <ul className="h-4/6 mt-6">
            <li className="flex justify-between mb-3">
              <label htmlFor="new-password-input">New Password</label>
              <input
                id="new-password-input"
                type="password"
                className="h-8 w-32 self-center text-center border-2 rounded-lg"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </li>
            <li className=" flex justify-between">
              <label htmlFor="current-password-input">Current Password</label>
              <input
                id="current-password-input"
                type="password"
                className="h-8 w-32 self-center text-center border-2 rounded-lg"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </li>
          </ul>
          <br />
          <ButtonTab text="Change" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
