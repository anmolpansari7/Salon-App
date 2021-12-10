import React from "react";
import PriceList from "./PriceList";
import DealList from "./DealList";
import TodaysCustomerList from "./TodaysCustomerList";

const PriceListPage = () => {
  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6 flex">
      <PriceList />
      <div className="h-full flex-grow">
        <DealList />
        <TodaysCustomerList />
      </div>
    </div>
  );
};

export default PriceListPage;
