import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportPageActions } from "../../store/report-slice";
import DetailBoxHeader from "./DetailBoxHeader";
import TodaysFieldTitle from "./TodaysFieldTitle";
import TodaysFieldItems from "./TodaysFieldItems";

const DetailedSection = () => {
  const filterType = useSelector((state) => state.report.filterType);
  const todaysCustomerList = useSelector(
    (state) => state.report.todaysCustomerList
  );
  const dispatch = useDispatch();
  const hideDetailedPage = () => {
    dispatch(
      reportPageActions.toggleDetailedBox({
        filterType: null,
      })
    );
  };

  let billAmountTotal = 7850;
  let paidAmountTotal = 7150;
  let remaingDuesTotal = 700;
  let pointsUsed = 45;
  let pointsGiven = 32;
  return (
    <div className="h-full w-full pt-12 bg-list-bg rounded-list-box border-4 border-detail-card-border">
      <DetailBoxHeader
        heading="Today's Customer List -"
        hideDetailedPage={hideDetailedPage}
      />
      <TodaysFieldTitle />
      <ul className=" h-4/6 px-14 overflow-y-auto">
        {todaysCustomerList.map((customer, index) => (
          <TodaysFieldItems
            index={index}
            key={customer.id}
            name={customer.name}
            mobile={customer.mobile}
            billAmount={customer.billAmount}
            paidAmount={customer.paidAmount}
            pointsUsed={customer.pointsUsed}
            pointsGiven={customer.pointsGiven}
          />
        ))}
      </ul>
      <div className="bg-detail-card-border h-14 mt-8 rounded-br-list-box rounded-bl-list-box flex justify-between text-white font-medium text-xl">
        <p className="text-right w-4/12 self-center mr-16">Total :-</p>
        <p className="text-right w-1/12 self-center">{billAmountTotal} Rs.</p>
        <p className="text-right w-1/12 self-center">{paidAmountTotal} Rs.</p>
        <p className="text-right w-1/12 self-center">{remaingDuesTotal} Rs.</p>
        <p className="text-right w-1/12 self-center">{pointsUsed} Pts.</p>
        <p className="text-right w-1/12 mr-14 self-center">
          {pointsGiven} Pts.
        </p>
      </div>
    </div>
  );
};

export default DetailedSection;
