import React from "react";

const ListItem = ({ id, name, cost }) => {
  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
      <p>{name}</p>
      <p>{cost} Rs.</p>
    </li>
  );
};

export default ListItem;
