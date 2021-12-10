import React from "react";

const OverviewListItem = ({ field, value }) => {
  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
      <p>{field}</p>
      <p>{value}</p>
    </li>
  );
};

export default OverviewListItem;
