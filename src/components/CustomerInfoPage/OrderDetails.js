import React from "react";

const OrderDetails = ({
  totalAmount,
  paidAmount,
  paymentMode,
  remark,
  pointsUsed,
  pointsGiven,
  discountGiven,
}) => {
  return (
    <div className=" text-sm mt-7">
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Total Amount -</p>
        <p>{totalAmount} Rs.</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Paid Amount -</p>
        <p>{paidAmount} Rs.</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Due -</p>
        <p>{totalAmount - paidAmount} Rs.</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Payment Mode -</p>
        <p>{paymentMode}</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Remarks -</p>
        <p>{remark}</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Points Used -</p>
        <p>{pointsUsed} Pts.</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Points Earned -</p>
        <p>{pointsGiven} Pts.</p>
      </div>
      <div className="flex mt-2 justify-between text-gray-600 border-b-2 border-dotted border-gray-400">
        <p>Discount Given</p>
        <p>{discountGiven} Rs.</p>
      </div>
    </div>
  );
};

export default OrderDetails;
