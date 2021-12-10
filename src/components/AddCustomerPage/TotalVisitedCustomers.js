import React from "react";

const TotalVisitedCustomers = ({ totalCustomersVisited }) => {
  return (
    <div className="h-76 px-14 py-16 bg-list-bg rounded-tr-list-box rounded-br-list-box flex flex-col justify-center items-center">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-4xl font-medium text-center">
          Total Customers Visited -
        </h1>
      </div>
      <ul className="h-4/6 mt-5 overflow-y-auto">
        <li className="flex justify-between mt-3 text-5xl">
          <p className="text-center font-medium">{totalCustomersVisited}</p>
        </li>
      </ul>
    </div>
  );
};

export default TotalVisitedCustomers;
