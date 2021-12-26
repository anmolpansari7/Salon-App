import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Layout/Backdrop";
import NewOrder from "./NewOrder";

const NewOrderOverlay = ({ onClose, currCustomerId }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <NewOrder onClose={onClose} currCustomerId={currCustomerId} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default NewOrderOverlay;
