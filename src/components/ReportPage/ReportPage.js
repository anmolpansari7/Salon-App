import React from "react";
import { useSelector } from "react-redux";
import DetailedSection from "./DetailedSection";
import OverviewSection from "./OverviewSection";

const ReportPage = () => {
  const showDetailedPage = useSelector(
    (state) => state.report.isDetailedBoxVisible
  );

  return (
    <div className="h-200 bg-page-bg px-32 pt-8 pb-6">
      {!showDetailedPage ? <OverviewSection /> : <DetailedSection />}
    </div>
  );
};

export default ReportPage;
