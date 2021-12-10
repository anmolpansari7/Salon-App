import React from "react";

const Tabs = ({ text, isactive, svgPathD }) => {
  const tabClass = isactive
    ? "bg-btn-tab transform-gpu scale-110"
    : "bg-inactive-tab-left";

  return (
    <div className=" bg-inactive-tab-right flex h-12 rounded-tab-cor shadow-md hover:bg-white">
      <div
        className={
          tabClass +
          " h-full w-22 flex justify-center items-center rounded-tab-cor"
        }
      >
        <svg
          className={`" h-6 w-8 fill-2 stroke-1.5 text-base" ${
            isactive ? " stroke-light" : " stroke-dark"
          }`}
          viewBox="0 0 24 24"
        >
          <path d={svgPathD} />
        </svg>
      </div>
      <div className="flex justify-center items-center pl-2 pr-5 min-w-min">
        <p className={`text-sm ${isactive ? " font-medium" : ""}`}>{text}</p>
      </div>
    </div>
  );
};

export default Tabs;
