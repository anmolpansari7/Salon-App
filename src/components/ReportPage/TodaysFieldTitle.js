import React from "react";

const TodaysFieldTitle = () => {
  return (
    <ul className="mt-7 mr-3 mb-2 px-14">
      <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
        <p className=" w-2/12 font-medium">Customer's Name</p>
        <p className=" w-2/12 font-medium">Contact Number</p>
        <p className=" w-1/12 font-medium text-right">Bill Amt.</p>
        <p className=" w-1/12 font-medium text-right">Paid Amt.</p>
        <p className=" w-1/12 font-medium text-right">Dues</p>
        <p className=" w-1/12 font-medium text-right">Pts. Used</p>
        <p className=" w-1/12 font-medium text-right">Pts. Given</p>
      </li>
    </ul>
  );
};

export default TodaysFieldTitle;
