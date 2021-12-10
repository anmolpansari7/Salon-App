import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AddCustomerFrom from "./../AddCustomerOverlay/AddCustomerFrom";
import Backdrop from "./../Layout/Backdrop";

const AddCustomerOverlay = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddCustomerFrom onFormSubmit={onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddCustomerOverlay;
