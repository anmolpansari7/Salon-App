import React from "react";
import moment from "moment";

const TodaysFieldItems = ({
  index,
  name,
  mobile,
  billAmount,
  paidAmount,
  paymentMode,
  pointsUsed,
  pointsGiven,
  date,
}) => {
  let formatDate = moment(date).format("ll").split(",");

  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
      <p className=" w-2/12 truncate">
        {index + 1}. {name}
      </p>
      <p className=" w-44">+91 {mobile}</p>
      <p className=" w-1/12 text-right">
        {billAmount}
        <span className=" text-sm ml-1">Rs.</span>
      </p>
      <p className="w-32 text-right">
        <span className=" text-xs mr-2">({paymentMode})</span>
        {paidAmount}
        <span className=" text-sm ml-1">Rs.</span>
      </p>
      <p className=" w-1/12 text-right">
        {billAmount - paidAmount}
        <span className=" text-sm ml-1">Rs.</span>
      </p>
      <p className=" w-1/12 text-right">
        {pointsUsed}
        <span className=" text-sm ml-1">Pts.</span>
      </p>
      <p className=" w-1/12 text-right">
        {pointsGiven}
        <span className=" text-sm ml-1">Pts.</span>
      </p>
      <p className=" w-20 text-right">{formatDate[0]}</p>
    </li>
  );
};

export default TodaysFieldItems;
