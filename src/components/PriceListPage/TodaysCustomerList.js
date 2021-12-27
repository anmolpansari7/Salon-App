import React, { useEffect } from "react";
import { getTotalVisitedCustomers } from "../../store/customers-actions";
import { useSelector, useDispatch } from "react-redux";

const TodaysCustomerList = () => {
  const dispatch = useDispatch();
  const totalCustomers = useSelector(
    (state) => state.customers.totalVisitedCustomers
  );

  useEffect(() => {
    dispatch(getTotalVisitedCustomers());
  }, [dispatch]);

  return (
    <div className=" flex-grow px-12 py-10 bg-list-bg rounded-tr-list-box rounded-br-list-box">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">Total Customers -</h1>
      </div>
      <h1 className=" text-6xl font-medium text-center justify-center mt-7">
        {totalCustomers}
      </h1>
    </div>
  );
};

export default TodaysCustomerList;
