import React from "react";
import OverviewBox from "./OverviewBox";

const OverviewSection = () => {
  return (
    <div className="h-full w-full flex justify-between">
      <OverviewBox
        title={"Today -"}
        customerVisited={30}
        totalBillAmount={3500}
        amountCollected={3200}
        pointsUsed={30}
        pointsGiven={12}
      />
      <OverviewBox
        title={"This Week -"}
        customerVisited={150}
        totalBillAmount={12520}
        amountCollected={11300}
        pointsUsed={70}
        pointsGiven={52}
      />
      <OverviewBox
        title={"This Month -"}
        customerVisited={650}
        totalBillAmount={45320}
        amountCollected={41120}
        pointsUsed={220}
        pointsGiven={182}
      />
    </div>
  );
};

export default OverviewSection;
