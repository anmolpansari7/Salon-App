import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import ButtonTab from "./Layout/ButtonTab";
import axios from "axios";
import { toast } from "react-toastify";
import { authSliceAction } from "../store/auth-slice";

require("dotenv").config();

const Message = () => {
  const messageInputRef = useRef();
  const dispatch = useDispatch();

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const ownerToken = localStorage.getItem("ownerToken");
    const message = messageInputRef.current.value;
    const id = toast.loading("Message Queued for Sending ...");
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/send_sms`,
        {
          message: message,
        },
        {
          headers: { Authorization: `Bearer ${ownerToken}` },
        }
      )
      .then(() => {
        toast.update(id, {
          render: "Message Sent to all Customers.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          draggable: true,
        });
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

  return (
    <form
      className="h-200 bg-page-bg px-32 pt-8 pb-6 flex flex-col justify-center items-center"
      onSubmit={sendMessageHandler}
    >
      <textarea
        placeholder="Type your message here..."
        className=" h-2/3 w-1/2 max-h-96 rounded-list-box bg-list-bg px-16 py-14 -mt-20 mb-3 focus:outline-none"
        ref={messageInputRef}
      />
      <ButtonTab text="Send" />
    </form>
  );
};

export default Message;
