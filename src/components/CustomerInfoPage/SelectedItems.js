import React from "react";

const SelectedItems = ({ id, name, cost, onRemoveItem }) => {
  return (
    <div className="flex">
      <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
        <p>{name}</p>
        <p>{cost} Rs.</p>
      </li>
      <button className="h-8 w-6 ml-2 mt-3" value={id} onClick={onRemoveItem}>
        X
      </button>
    </div>
  );
};

export default SelectedItems;
