import React, { Fragment } from "react";
import Backdrop from "../Layout/Backdrop";
import PasswordChangeForm from "./PasswordChangeForm";
import ReactDOM from "react-dom";

const PasswordChangeOverlay = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <PasswordChangeForm onFormSubmit={onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default PasswordChangeOverlay;
