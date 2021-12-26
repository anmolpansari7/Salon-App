import React from "react";
import OverviewBoxButton from "./OverviewBoxButton";
import OverviewListItem from "./OverviewListItem";

const OverviewBox = ({
  title,
  customerVisited,
  totalBillAmount,
  amountCollected,
  pointsUsed,
  pointsGiven,
}) => {
  const remainingDues = totalBillAmount - amountCollected;
  return (
    <div className="rounded-list-box bg-list-bg px-14 py-14 mr-8 w-4/12 flex flex-col h-5/6">
      <div className="w-full border-dashed border-b-2 border-black">
        <h1 className="text-2xl font-medium">{title} -</h1>
      </div>
      <ul className="mt-7 overflow-y-auto h-4/5">
        <OverviewListItem field="Orders Delivered" value={customerVisited} />
        <OverviewListItem
          field="Total Bill Amount"
          value={totalBillAmount + " Rs."}
        />
        <OverviewListItem
          field="Amount Collected"
          value={amountCollected + " Rs."}
        />
        <OverviewListItem
          field="Remaining Dues"
          value={remainingDues + " Rs."}
        />
        <OverviewListItem field="Points Used" value={pointsUsed + " Pts."} />
        <OverviewListItem field="Points Earned" value={pointsGiven + " Pts."} />
      </ul>
      <OverviewBoxButton boxTitle={title} />
    </div>
  );
};

export default OverviewBox;
