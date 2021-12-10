import React from "react";

const UsePointSection = ({
  discountAmount,
  maxPointLimit,
  onUsePointCheck,
  onUsePointsValueChange,
}) => {
  return (
    <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-5 text-lg">
      <p>*** Use Points</p>
      <input
        type="checkbox"
        name="use-points"
        id="points"
        className="h-6 w-6"
        onChange={onUsePointCheck}
      />
      <p>Discount of {discountAmount} Rs.</p>
      <input
        type="number"
        placeholder="use Points"
        min={0}
        max={maxPointLimit}
        className="w-3/12 text-right px-3 border-2 border-gray-300 rounded-edit-btn focus:outline-none"
        onChange={onUsePointsValueChange}
      />
    </li>
  );
};

export default UsePointSection;
