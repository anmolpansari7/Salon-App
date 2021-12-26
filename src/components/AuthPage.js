import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOwner } from "../store/auth-actions";
import keyImage from "./../assets/key.svg";
import ButtonTab from "./Layout/ButtonTab";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredPassword, setEnteredPassword] = useState("");

  const onAuthSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOwner(enteredPassword, navigate));
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center bg-auth-bg">
      <div className="h-full w-full bg-black bg-opacity-60 flex justify-center items-center">
        <form className="bg-white h-78 w-72 px-12 py-14 rounded-auth-box flex flex-col justify-between">
          <img src={keyImage} alt="key" className="h-10" />
          <h2 className="text-xl text-center font-normal -mt-1">
            Enter Security Key
          </h2>
          <input
            type="password"
            className="h-8 w-32 self-center text-center border-2 rounded-lg"
            value={enteredPassword}
            onChange={(e) => {
              setEnteredPassword(e.target.value);
            }}
          />
          <ButtonTab text="Proceed" type="submit" onClick={onAuthSubmit} />
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
