import React from "react";

const TodaysFieldItems = ({
  index,
  name,
  mobile,
  billAmount,
  paidAmount,
  pointsUsed,
  pointsGiven,
}) => {
  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
      <p className=" w-2/12 truncate">
        {index + 1}. {name}
      </p>
      <p className=" w-2/12">+91 {mobile}</p>
      <p className=" w-1/12 text-right">{billAmount} Rs.</p>
      <p className=" w-1/12 text-right">{paidAmount} Rs.</p>
      <p className=" w-1/12 text-right">{billAmount - paidAmount} Rs.</p>
      <p className=" w-1/12 text-right">{pointsUsed} Pts.</p>
      <p className=" w-1/12 text-right">{pointsGiven} Pts.</p>
    </li>
  );
};

export default TodaysFieldItems;
