import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportPageActions } from "../../store/report-slice";
import DetailBoxHeader from "./DetailBoxHeader";
import TodaysFieldTitle from "./TodaysFieldTitle";
import TodaysFieldItems from "./TodaysFieldItems";
import { getReportDetials } from "../../store/report-actions";

const DetailedSection = () => {
  const detailSectionHeading = useSelector(
    (state) => state.report.detailSectionHeading
  );
  const reportDetails = useSelector((state) => state.report.reportDetails);
  const loading = useSelector((state) => state.report.loading);

  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [shownDetails, setShownDetails] = useState(reportDetails);

  const hideDetailedPage = () => {
    dispatch(
      reportPageActions.toggleDetailedBox({
        detailSectionHeading: null,
      })
    );
  };

  let billAmountTotal = 0;
  let paidAmountTotal = 0;
  let pointsUsed = 0;
  let pointsGiven = 0;

  shownDetails.forEach((details) => {
    billAmountTotal += details.totalAmount;
    paidAmountTotal += details.paidAmount;
    pointsUsed += details.pointsUsed;
    pointsGiven += details.pointsGiven;
  });

  const onFilterChange = (e, filterType) => {
    setFilter(e.target.value);
    let currentList = [];
    if (e.target.value !== "" && filterType === "name") {
      reportDetails.forEach((detail) => {
        if (
          detail.customerDetails.name
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase())
        ) {
          currentList.push(detail);
        }
      });
      setShownDetails(currentList);
    } else if (e.target.value !== "" && filterType === "phone") {
      reportDetails.forEach((detail) => {
        if (
          detail.customerDetails.phone
            .toString()
            .includes(e.target.value.toString())
        ) {
          currentList.push(detail);
        }
      });
      setShownDetails(currentList);
    } else if (e.target.value !== "" && filterType === "totalAmount") {
      reportDetails.forEach((detail) => {
        if (detail.totalAmount.toString().includes(e.target.value.toString())) {
          currentList.push(detail);
        }
        setShownDetails(currentList);
      });
    } else {
      setShownDetails(reportDetails);
    }
  };

  useEffect(() => {
    dispatch(getReportDetials(detailSectionHeading));
  }, [detailSectionHeading, dispatch]);

  useEffect(() => {
    setShownDetails(reportDetails);
  }, [reportDetails]);

  return (
    <div className="h-full w-full pt-12 bg-list-bg rounded-list-box border-4 border-detail-card-border">
      <DetailBoxHeader
        heading={detailSectionHeading + "'s Customer List -"}
        hideDetailedPage={hideDetailedPage}
        filterValue={filter}
        onFilterChange={onFilterChange}
      />
      <TodaysFieldTitle />
      <ul className=" h-4/6 px-14 overflow-y-auto">
        {loading ? (
          <h1 className=" text-center text-lg">Loading ...</h1>
        ) : (
          shownDetails.map((details, index) => (
            <TodaysFieldItems
              index={index}
              key={details._id}
              name={details.customerDetails.name}
              mobile={details.customerDetails.phone}
              billAmount={details.totalAmount}
              paidAmount={details.paidAmount}
              paymentMode={details.paymentMode}
              pointsUsed={details.pointsUsed}
              pointsGiven={details.pointsGiven}
              date={details.createdAt}
            />
          ))
        )}
      </ul>
      <div className="bg-detail-card-border h-14 mt-8 rounded-br-list-box rounded-bl-list-box flex text-white font-medium text-xl">
        <p className="text-right w-4/12 self-center">Total :-</p>
        <p className="text-right w-36 self-center">
          {billAmountTotal}
          <span className=" text-base ml-1">Rs.</span>
        </p>
        <p className="text-right w-36 self-center">
          {paidAmountTotal}
          <span className=" text-base ml-1">Rs.</span>
        </p>
        <p className="text-right w-32 self-center">
          {billAmountTotal - paidAmountTotal}
          <span className=" text-base ml-1">Rs.</span>
        </p>
        <p className="text-right w-32 self-center">
          {pointsUsed.toFixed(2)}
          <span className=" text-base ml-1">Pts.</span>
        </p>
        <p className="text-right w-32 self-center">
          {pointsGiven.toFixed(2)}
          <span className=" text-base ml-1">Pts.</span>
        </p>
      </div>
    </div>
  );
};

export default DetailedSection;
