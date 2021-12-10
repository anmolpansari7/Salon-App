import React from "react";
import EditPriceList from "./EditPriceList";
import EditDealList from "./EditDealList";
import EditPriceCalculator from "./EditPriceCalculator";

const EditPage = () => {
  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6 flex">
      <EditPriceList />
      <div className="h-full w-5/12 flex-grow">
        <EditDealList />
        <EditPriceCalculator />
      </div>
    </div>
  );
};

export default EditPage;
