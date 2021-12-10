import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      className=" absolute h-full w-full bg-black opacity-60 z-10"
      onClick={onClick}
    />
  );
};

export default Backdrop;
