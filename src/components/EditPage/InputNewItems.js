import React, { useState } from "react";
import EditBtn from "./../../assets/edit_btn.svg";

const InputNewItems = ({ onBlur }) => {
  const [currItem, setCurrItem] = useState("");
  const [currPrice, setCurrPrice] = useState("");

  return (
    <li className="flex justify-between border-dashed border-b-2 border-gray-800 mt-8 text-lg">
      <input
        className="w-8/12 focus:outline-none"
        type="text"
        placeholder="Add Item"
        value={currItem}
        onChange={(e) => setCurrItem(e.target.value)}
      />
      <input
        className="w-2/12 focus:outline-none text-right"
        type="number"
        placeholder="Price"
        value={currPrice}
        onChange={(e) => setCurrPrice(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onBlur(currItem, currPrice);
            setCurrItem("");
            setCurrPrice("");
          }
        }}
        onBlur={() => {
          onBlur(currItem, currPrice);
          setCurrItem("");
          setCurrPrice("");
        }}
      />
      <p>Rs.</p>
      <img src={EditBtn} alt="edit" className="h-5" />
    </li>
  );
};

export default InputNewItems;
