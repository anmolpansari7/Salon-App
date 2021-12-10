import React from "react";
import { useDispatch } from "react-redux";
import { reportPageActions } from "../../store/report-slice";
import overviewButton from "../../assets/OverviewButton.svg";

const OverviewBoxButton = ({ boxTitle }) => {
  const dispatch = useDispatch();

  const onShowDetailHandler = (e) => {
    let name = e.target.name;
    console.log(e.target.name);
    name = name.replace(/\s+/g, "");
    name = name.replace(/[^a-zA-Z ]/g, "");
    name = name.toLowerCase();
    console.log(name);
    dispatch(
      reportPageActions.toggleDetailedBox({
        filterType: name,
      })
    );
  };

  return (
    <button
      className=" bg-overview-btn p-3 rounded-tab-cor w-max self-end"
      name={boxTitle}
      onClick={(e) => {
        onShowDetailHandler(e);
      }}
    >
      <img
        name={boxTitle}
        src={overviewButton}
        alt="See more"
        className=" h-6"
      />
    </button>
  );
};

export default OverviewBoxButton;
