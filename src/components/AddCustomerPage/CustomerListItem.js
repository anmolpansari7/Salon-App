import React from "react";

const CustomerListItem = ({ id, name, mobile, points }) => {
  return (
    <li
      key={id}
      className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg"
    >
      <p className="w-3/6">{name}</p>
      <p className="w-2/6 text-left">+91 {mobile}</p>
      <p className="w-1/6  text-right">{points} Pts.</p>
    </li>
  );
};

export default CustomerListItem;
