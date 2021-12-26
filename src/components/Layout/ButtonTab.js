import React from "react";

const ButtonTab = ({ text, type, onClick }) => {
  return (
    <button
      className="bg-btn-tab text-white h-12 w-22 rounded-tab-cor self-center text-sm"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonTab;
