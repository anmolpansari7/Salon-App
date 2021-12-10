import React from "react";

const AddCustomerButton = ({ onClick }) => {
  return (
    <button
      className={
        " h-12 w-22 flex justify-center items-center rounded-tab-cor bg-inactive-tab-left shadow-md hover:bg-white"
      }
      onClick={onClick}
    >
      <svg
        className={" h-6 w-8 fill-2 stroke-1.5 text-base stroke-dark"}
        viewBox="0 0 24 24"
      >
        <path d="M11 2v18M2 11h18" />
      </svg>
    </button>
  );
};

export default AddCustomerButton;
