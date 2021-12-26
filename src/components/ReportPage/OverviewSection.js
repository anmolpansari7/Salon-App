import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReportOverviews } from "../../store/report-actions";
import OverviewBox from "./OverviewBox";

const OverviewSection = () => {
  const dispatch = useDispatch();
  const reportOverview = useSelector((state) => state.report.overview);

  useEffect(() => {
    dispatch(getReportOverviews());
  }, [dispatch]);

  return (
    <div className="h-full w-full flex justify-between">
      {reportOverview.length === 0 ? (
        <h1 className=" text-2xl w-full text-center self-center justify-center">
          Loading...
        </h1>
      ) : (
        <>
          <OverviewBox
            title={"Today"}
            customerVisited={reportOverview[0].totalCustomers}
            totalBillAmount={reportOverview[0].totalAmount}
            amountCollected={reportOverview[0].paidAmount}
            pointsUsed={reportOverview[0].pointsUsed}
            pointsGiven={reportOverview[0].pointsGiven}
          />
          <OverviewBox
            title={"This Week"}
            customerVisited={reportOverview[1].totalCustomers}
            totalBillAmount={reportOverview[1].totalAmount}
            amountCollected={reportOverview[1].paidAmount}
            pointsUsed={reportOverview[1].pointsUsed}
            pointsGiven={reportOverview[1].pointsGiven}
          />
          <OverviewBox
            title={"This Month"}
            customerVisited={reportOverview[2].totalCustomers}
            totalBillAmount={reportOverview[2].totalAmount}
            amountCollected={reportOverview[2].paidAmount}
            pointsUsed={reportOverview[2].pointsUsed}
            pointsGiven={reportOverview[2].pointsGiven}
          />
        </>
      )}
    </div>
  );
};

export default OverviewSection;
