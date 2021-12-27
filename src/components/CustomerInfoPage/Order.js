import React, { forwardRef } from "react";
import moment from "moment";
import OrderDetails from "./OrderDetails";
import OrderItems from "./OrderItems";

const Order = forwardRef(({ order }, ref) => {
  return (
    <div
      className="w-64 px-7 pt-5 pb-10 bg-list-bg rounded-tab-cor flex flex-col justify-between"
      ref={ref}
    >
      <h1 className="text-xl pb-1 border-b-2 border-dashed border-gray-500 text-center">
        {moment(order.createdAt).format("ll")}
      </h1>
      <OrderItems items={order.itemNames} />
      <OrderDetails
        totalAmount={order.totalAmount}
        paidAmount={order.paidAmount}
        paymentMode={order.paymentMode}
        remark={order.remark}
        pointsUsed={order.pointsUsed}
        pointsGiven={order.pointsGiven}
        discountGiven={order.discount}
      />
    </div>
  );
});
export default Order;
