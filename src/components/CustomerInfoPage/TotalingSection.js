import React, { Fragment } from "react";

const TotalingSection = ({
  totalAmount,
  onPaymentModeChange,
  onPaidAmountChange,
  onRemarkChange,
}) => {
  return (
    <Fragment>
      <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
        <p className="font-medium">Total Amount</p>
        <p className="font-medium">{totalAmount} Rs.</p>
      </li>
      <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
        <p className="flex-grow font-medium">Paid Amount</p>
        <input
          type="number"
          placeholder="0"
          className="text-right px-2 font-medium focus:outline-none"
          onChange={onPaidAmountChange}
        />
        <p className="font-medium">Rs.</p>
      </li>
      <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
        <label className="">Payment Mode</label>
        <select
          className="font-medium focus:outline-none px-2"
          onChange={onPaymentModeChange}
        >
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select>
      </li>
      <li className="flex flex-grow justify-between border-dashed border-b-2 border-gray-800 mt-3 text-lg">
        <p className="">Remarks </p>
        <input
          type="text"
          placeholder="- Optional ..."
          className=" focus:outline-none"
          onChange={onRemarkChange}
        />
      </li>
    </Fragment>
  );
};

export default TotalingSection;
