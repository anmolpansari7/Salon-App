import React from "react";

const CustomSelect = ({ combineList, onItemSelection }) => {
  return (
    <div className=" p-0.5 flex justify-between bg-gray-200 border-solid border-black mt-4">
      <label htmlFor="list-items"></label>
      <select
        id="list-items"
        className=" p-0.5 flex-1 focus:outline-none"
        onChange={onItemSelection}
      >
        {combineList.length === 0 ? (
          <p> No deals Today </p>
        ) : (
          combineList.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default CustomSelect;
