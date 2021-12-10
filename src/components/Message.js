import React, { useRef } from "react";
import ButtonTab from "./Layout/ButtonTab";

const Message = () => {
  const messageInputRef = useRef();

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const message = messageInputRef.current.value;
    console.log(message);
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
